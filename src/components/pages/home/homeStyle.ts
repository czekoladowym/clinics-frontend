import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;
export const HomeHeader = styled.div`
  position: relative;
  padding: 3.5rem 1.5rem 0 3.5rem;
  display: flex;
  flex-direction: column;
`;
export const SeacrchField = styled.div`
  display: flex;
`;
export const SearchBtn = styled.button`
  height: 42px;
  margin-left: 5px;
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 7px;
  background-color: #efefef;
  :hover {
    cursor: pointer;
    background-color: #dad7d7;
  }
`;
export const BtnImg = styled.img`
  height: 24px;
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
  overflow-y: auto;
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
export const CheckboxBlock = styled.div`
  display: block;
  margin: 16px 0 16px;
`;
export const NoResultsBlock = styled(ScrollBlock)`
  margin-right: 22px;
  font-size: 120px;
`;
