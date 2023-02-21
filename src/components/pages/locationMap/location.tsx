import { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

const API_KEY = import.meta.env.VITE_API_KEY;
const containerStyle = {
  width: "calc(100% - 2rem)",
  height: "450px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LocationMap = ({ center }: any) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(undefined);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};
export default LocationMap;
