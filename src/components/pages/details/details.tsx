import { useJsApiLoader } from "@react-google-maps/api";
import LocationMap from "../locationMap/location";
import {
  DetailsBlock,
  LogoHeader,
  LogoImg,
  DetailsContent,
  DetailsSelect,
  SelectBtn,
  MapBlock,
} from "./detailsSearch";
import logoImg from "/icons/lambda.svg";

const Details = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const centerApi = {
    lat: 51.00307368241314,
    lng: 3.7230193422867197,
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
            <SelectBtn>Location</SelectBtn>
            <SelectBtn>About</SelectBtn>
          </DetailsSelect>
        </DetailsContent>
        <MapBlock>
          {isLoaded ? <LocationMap center={centerApi} /> : <h1>Sorry</h1>}
        </MapBlock>
      </DetailsBlock>
    </>
  );
};

export default Details;
