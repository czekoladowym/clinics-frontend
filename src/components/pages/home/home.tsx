import axios, { AxiosError, AxiosResponse } from "axios";
import { useState, useMemo, useCallback, useEffect } from "react";
import searchImg from "/icons/search.svg";
import {
  SearchInput,
  ScrollBlock,
  Home,
  HomeContainer,
  ResultsContacts,
  HomeHeader,
  SearchImg,
  CheckboxBlock,
  NoResultsBlock,
} from "./homeStyle";
import Details from "../details/details";
import { Clinic, ResResponce } from "../../interfaces/interfaces";
import Checkbox from "../../common/checkbox/checkbox";
import ClinicCard from "../clinicCard/ClinicCard";

const Search = () => {
  const [searchRes, setSearchRes] = useState<Clinic[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeClinic, setActiveClinic] = useState<number>(0);
  const [activeSelector, setActiveSelector] = useState<string>("City");

  const getSearchRes = useCallback(async () => {
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
          .join("")}`
      )
      .catch((error: AxiosError) => {
        const res = error.response as AxiosResponse;
        res.data = {
          ...res.data,
          mapped: [],
        };
        console.log(searchValue);

        return res;
      });

    setSearchRes(res.data.mapped);
  }, [searchRes, searchValue]);
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
            <SearchImg src={searchImg} />
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            ></SearchInput>
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
          {searchRes.length ? (
            <ScrollBlock>
              {searchRes.map((clinic, i) => (
                <ClinicCard
                  key={i}
                  clinic={clinic}
                  onClick={() => setActiveClinic(i)}
                  isActive={i === activeClinic}
                />
              ))}
            </ScrollBlock>
          ) : (
            <NoResultsBlock>
              <span className="no-results-block">No results</span>
            </NoResultsBlock>
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
