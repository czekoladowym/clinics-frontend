export interface ResResponce {
  pages: number;
  mapped: Clinic[];
}
export interface Clinic {
  clinicName: string;
  clinicSlug: string;
  address: string;
  website: string;
  phone: string;
  suburb: string;
  zip: string;
  email: string;
  state: string;
  city: string;
  about: string;
  url: string;
  location: Location;
}
export interface Suburbs {
  metaTitle: string;
  suburb: string;
  slug: string;
  state: string;
  url: string;
}
export interface ClinicsSearchRes {
  clinicName: string;
  clinicSlug: string;
  address: string;
  website: string;
  phone: string;
  suburb: string;
  zip: string;
  email: string;
  state: string;
  city: string;
  about: string;
  location: {
    lat: number;
    lng: number;
  };
  url: string;
}
export interface Location {
  lat: number;
  lng: number;
}
