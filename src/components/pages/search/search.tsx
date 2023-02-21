import axios from "axios";
import { useState, useMemo, useCallback } from "react";
import searchImg from "/icons/search.svg";
import {
  SearchInput,
  ScrollBlock,
  SearchResult,
  Home,
  SearchContainer,
  ResultsContacts,
  SearchHeader,
  SearchImg,
  CheckboxBlock,
} from "./searchStyle";
import Details from "../details/details";
const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("Canberra");
  return (
    <>
      <Home>
        <SearchContainer>
          <SearchHeader>
            <SearchImg src={searchImg} />
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            ></SearchInput>
            <div>
              <CheckboxBlock>
                One
                <input type="checkbox" className="checkbox" />
                <span className="checkmark"></span>
              </CheckboxBlock>
              <CheckboxBlock>
                two
                <input type="checkbox" className="checkbox" />
                <span className="checkmark"></span>
              </CheckboxBlock>
            </div>
          </SearchHeader>
          <ScrollBlock>
            <SearchResult>
              <h3>Shulika Olexander Olexiovich</h3>
              <p>Yakuba Kolosa 27V</p>
              <ResultsContacts>
                <a href="https://precoro.com/">https://precoro.com/</a>
                <a href="https://google.com">p. 09 3972 5739</a>
              </ResultsContacts>
            </SearchResult>
          </ScrollBlock>
        </SearchContainer>
        <Details />
      </Home>
    </>
  );
};

export default Search;
