import axios, { AxiosResponse } from "axios";
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
} from "./homeStyle";
import Details from "../details/details";
import { Clinic, ResResponce } from "../../interfaces/interfaces";
import Checkbox from "../../common/checkbox/checkbox";
import ClinicCard from "../clinicCard/ClinicCard";

const Search = () => {
  const [searchRes, setSearchRes] = useState<Clinic[]>([]);
  const [searchValue, setSearchValue] = useState<string>("Canberra");
  const [activeClinic, setActiveClinic] = useState<number>(0);

  const getSearchRes = useCallback(async () => {
    if (!searchRes) {
      return;
    }
    const res: AxiosResponse<ResResponce> = await axios.get(
      `https://clinics-backend.onrender.com/cities/${searchValue.toLowerCase()}`
    );
    setSearchRes(res.data.clinics);
  }, [searchRes, searchValue]);

  useEffect(() => {
    getSearchRes();
  }, [searchValue]);

  return (
    <>
      <Home>
        <HomeContainer>
          <HomeHeader>
            <SearchImg src={searchImg} />
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></SearchInput>
            <CheckboxBlock>
              <Checkbox />
            </CheckboxBlock>
          </HomeHeader>
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
        </HomeContainer>
        {searchRes.length && (
          <Details clinics={searchRes} activeClinic={activeClinic} />
        )}
      </Home>
    </>
  );
};

export default Search;
