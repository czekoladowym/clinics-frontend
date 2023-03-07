import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";
import { Location, Clinic } from "../../interfaces/interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;
const containerStyle = {
  width: "calc(100% - 2rem)",
  height: "480px",
};

interface ILocPrors {
  clinics: Clinic[];
  activeClinic: number;
}

const LocationMap = ({ clinics, activeClinic }: ILocPrors) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  const clinicsLocs: Location[] = useMemo(() => {
    return clinics.map((clinic) => clinic.location);
  }, [clinics]);
  const currentLocMarker: Location = useMemo(() => {
    return clinics[activeClinic].location;
  }, [clinics, activeClinic]);

  const markerLabel = useMemo(() => {
    return clinics[activeClinic].clinicName;
  }, [clinics, activeClinic]);

  const markers = useMemo(() => {
    return clinicsLocs.map((loc, i) => (
      <MarkerF
        position={loc}
        key={i}
        onClick={() => console.log(markerLabel)}
        title={markerLabel}
      />
    ));
  }, clinicsLocs);

  if (!isLoaded) return <p>NO WAY</p>;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentLocMarker}
      zoom={12}
    >
      {markers}
    </GoogleMap>
  );
};
export default LocationMap;
