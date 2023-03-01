import { HTMLAttributes } from "react";
import { Clinic } from "../../interfaces/interfaces";
import { ResultsContacts } from "../home/homeStyle";
import { SearchResult } from "./ClinicCardStyles";

interface ISearchProps {
  clinic: Clinic;
  onClick: () => void;
  isActive: boolean;
}

const ClinicCard = ({ clinic, onClick, isActive }: ISearchProps) => {
  return (
    <SearchResult onClick={onClick} isActive={isActive}>
      <h3>{clinic.clinicName}</h3>
      <p>{clinic.address}</p>
      <ResultsContacts>
        <a href={clinic.website}>{clinic.website}</a>
        <a href={"tel:" + clinic.phone}>{"p. " + clinic.phone}</a>
      </ResultsContacts>
    </SearchResult>
  );
};
export default ClinicCard;
