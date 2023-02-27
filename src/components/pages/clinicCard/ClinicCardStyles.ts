import styled from "styled-components";

export const SearchResult = styled.div<{ isActive: boolean }>`
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
  :hover {
    cursor: pointer;
    background-color: #ccffc1;
  }
  background-color: ${({ isActive }) => (isActive ? "#86ff86" : "#fff")};
`;
