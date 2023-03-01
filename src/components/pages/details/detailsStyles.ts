import styled from "styled-components";

export const DetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;
export const LogoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
  padding-top: 3rem;
  padding-right: 3rem;
  padding-bottom: 0.35rem;
`;
export const LogoImg = styled.img`
  height: 3rem;
  width: 3rem;
`;
export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2rem);
  padding: 0 1rem;
  margin-top: 3rem;
`;
export const DetailsSelect = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const SelectBtn = styled.li`
  :first-child {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  :last-child {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  display: flex;
  justify-content: center;
  list-style: none;
  border: 1px solid black;
  flex: 1;
  font-size: 1.5rem;
  border-width: 1px;
  border-radius: 0;
  padding: 0.25rem;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
`;
export const MapBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
