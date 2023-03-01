import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
  MarkerF,
} from "@react-google-maps/api";
import {
  Location,
  ClinicsSearchRes,
  ResResponce,
  Clinic,
} from "../../interfaces/interfaces";

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
  const mapRef = useRef(undefined);
  const clinicsLocs: Location[] = useMemo(() => {
    return clinics.map((clinic) => clinic.location);
  }, [clinics]);
  const markers = useMemo(() => {
    return clinicsLocs.map((loc, i) => <MarkerF position={loc} key={i} />);
  }, clinicsLocs);
  const mapCenter: Location = useMemo(() => {
    return clinics[activeClinic].location;
  }, [clinics, activeClinic]);
  const onLoad = useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers}
    </GoogleMap>
  );
};
export default LocationMap;
