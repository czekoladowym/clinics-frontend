import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useMemo, useCallback, useEffect } from "react";
import searchImg from "/icons/search.svg";
import loader from "/icons/loader.svg";
import {
  SearchInput,
  ScrollBlock,
  Home,
  HomeContainer,
  HomeHeader,
  SearchImg,
  CheckboxBlock,
  NoResultsBlock,
  SeacrchField,
  SearchBtn,
  BtnImg,
} from "./homeStyle";
import Details from "../details/details";
import { Clinic, ResResponce } from "../../interfaces/interfaces";
import Checkbox from "../../common/checkbox/checkbox";
import ClinicCard from "../clinicCard/ClinicCard";

const Search = () => {
  const [searchRes, setSearchRes] = useState<Clinic[]>([]);
  const [searchValue, setSearchValue] = useState<string>("hob");
  const [activeClinic, setActiveClinic] = useState<number>(0);
  const [activeSelector, setActiveSelector] = useState<string>("City");
  const [loading, setLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>(1);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [fullContent, setFullContent] = useState<boolean>(false);

  const getData = useCallback(
    async (page: number) => {
      if (!searchRes) {
        return;
      }
      const selector =
        activeSelector == "Clinic Name"
          ? "clinicName"
          : activeSelector.toLowerCase();
      const res: AxiosResponse<ResResponce> = await axios
        .get(
          `https://clinics-backend.onrender.com/clinics/search?${selector}=${searchValue
            .toLowerCase()
            .split(" ")
            .join("")}&page=${page}`
        )
        .catch((error: AxiosError) => {
          const res = error.response as AxiosResponse;
          res.data = {
            ...res.data,
            mapped: [],
          };
          return res;
        });

      return res.data;
    },
    [searchRes, searchValue]
  );

  const getSearchRes = useCallback(async () => {
    setFullContent(false);
    const data = await getData(1);
    if (data?.pages && data.pages <= 1) {
      setFullContent(true);
    }
    setNextPage(2);
    if (data) setSearchRes(data.mapped);
  }, [getData]);

  const getScrollData = useCallback(async () => {
    if (fullContent) {
      return;
    }
    setLoadingPage(true);
    const data = await getData(nextPage);
    if (data?.pages && data?.pages <= nextPage) {
      setFullContent(true);
    }
    setNextPage(nextPage + 1);
    setLoadingPage(false);
    if (data) setSearchRes([...searchRes, ...data.mapped]);
  }, [getData]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    console.log(el.scrollHeight - el.scrollTop, el.clientHeight);

    if (
      el.scrollHeight - el.scrollTop > el.clientHeight - 1 &&
      el.scrollHeight - el.scrollTop < el.clientHeight + 1
    ) {
      if (loadingPage) return;
      getScrollData();
    }
  };

  useEffect(() => {
    setLoading(true);
    getSearchRes().finally(() => {
      setLoading(false);
    });
  }, []);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      getSearchRes();
    }
  };

  return (
    <>
      <Home>
        <HomeContainer>
          <HomeHeader>
            <SeacrchField>
              <SearchImg src={searchImg} />
              <SearchInput
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={"Enter your request"}
              ></SearchInput>
              <SearchBtn onClick={() => getSearchRes()} value={searchValue}>
                <BtnImg src="/icons/search.svg" />
              </SearchBtn>
            </SeacrchField>
            <CheckboxBlock>
              <Checkbox
                activeSelector={activeSelector}
                onChange={(value: string) => {
                  setSearchValue("");
                  setActiveSelector(value);
                }}
              />
            </CheckboxBlock>
          </HomeHeader>
          {loading ? (
            <NoResultsBlock>
              <img src={loader} />
            </NoResultsBlock>
          ) : (
            <ScrollBlock onScroll={handleScroll}>
              {searchRes.length === 0 ? (
                <p>No results</p>
              ) : (
                searchRes.map((clinic, i) => (
                  <ClinicCard
                    key={i}
                    clinic={clinic}
                    onClick={() => setActiveClinic(i)}
                    isActive={i === activeClinic}
                  />
                ))
              )}
            </ScrollBlock>
          )}
        </HomeContainer>
        {searchRes.length > 0 && (
          <Details clinics={searchRes} activeClinic={activeClinic} />
        )}
      </Home>
    </>
  );
};

export default Search;
