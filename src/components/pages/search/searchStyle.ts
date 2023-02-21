import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;
export const SearchHeader = styled.div`
  position: relative;
  padding: 3.5rem 1.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
`;
export const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const ScrollBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  border: #555555 solid 1px;
  border-radius: 2px;
  background-color: #ffffff;
  margin: 0 0 0 3rem;
  font-size: 20px;
  max-height: 33.2rem;
  overflow-y: scroll;
`;
export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% - 1rem);
  height: 100%;
  padding: 0.5rem;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #555;
`;
export const ResultsContacts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const SearchImg = styled.img`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  top: 64px;
  left: 64px;
`;
export const CheckboxBlock = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
`;
