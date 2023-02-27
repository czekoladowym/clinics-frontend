import { useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import LocationMap from "../../common/locationMap/location";
import { Clinic } from "../../interfaces/interfaces";
import {
  DetailsBlock,
  LogoHeader,
  LogoImg,
  DetailsContent,
  DetailsSelect,
  SelectBtn,
  MapBlock,
} from "./detailsStyles";
import logoImg from "/icons/lambda.svg";

interface IProps {
  clinics: Clinic[];
  activeClinic: number;
}

const Details = ({ clinics, activeClinic }: IProps) => {
  const [ariaActive, setAriaActive] = useState<boolean>(false);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const centerApi = {
    lat: -35.2385141,
    lng: 149.0610109,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return (
    <>
      <DetailsBlock>
        <LogoHeader>
          <LogoImg src={logoImg} />
        </LogoHeader>
        <DetailsContent>
          <DetailsSelect>
            <SelectBtn onClick={() => setAriaActive(!ariaActive)}>
              Location
            </SelectBtn>
            <SelectBtn onClick={() => setAriaActive(!ariaActive)}>
              About
            </SelectBtn>
          </DetailsSelect>
        </DetailsContent>
        <MapBlock className={ariaActive ? "disable-area" : ""}>
          {isLoaded ? (
            <LocationMap clinics={clinics} activeClinic={activeClinic} />
          ) : (
            <p>Loading...</p>
          )}
        </MapBlock>
        <div className={ariaActive ? "visible" : "disable-area"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          quam modi dignissimos temporibus sunt aut at vel ullam reiciendis
          voluptates!
        </div>
      </DetailsBlock>
    </>
  );
};

export default Details;
