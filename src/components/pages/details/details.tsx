import { useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import LocationMap from "../../common/locationMap/location";
import { Clinic } from "../../interfaces/interfaces";
import AboutClinic from "../aboutClinic/aboutClinic";
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
  const [activeTab, setActiveTab] = useState<string>("map-tab");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  const handleMap = () => {
    setActiveTab("map-tab");
  };
  const handleAbout = () => {
    setActiveTab("about-tab");
  };

  return (
    <>
      <DetailsBlock>
        <LogoHeader>
          <LogoImg src={logoImg} />
        </LogoHeader>
        <DetailsContent>
          <DetailsSelect>
            <SelectBtn
              className={activeTab === "map-tab" ? "active" : ""}
              onClick={handleMap}
            >
              Location
            </SelectBtn>
            <SelectBtn
              className={activeTab === "about-tab" ? "active" : ""}
              onClick={handleAbout}
            >
              About
            </SelectBtn>
          </DetailsSelect>
        </DetailsContent>
        <MapBlock>
          {activeTab == "map-tab" ? (
            isLoaded && (
              <LocationMap clinics={clinics} activeClinic={activeClinic} />
            )
          ) : (
            <AboutClinic aboutClinic={clinics[activeClinic]} />
          )}
        </MapBlock>
      </DetailsBlock>
    </>
  );
};

//  <LocationMap clinics={clinics} activeClinic={activeClinic} />                     <AboutClinic aboutClinic={clinics[activeClinic]} />
export default Details;
