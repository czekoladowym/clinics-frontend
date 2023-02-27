export interface ResResponce {
  citySlug: string;
  cityName: string;
  clinics: Clinic[];
  suburbs: Suburbs[];
}
export interface Clinic {
  clinic: string;
  url: string;
  address: string;
  email: string | null;
  phone: string;
  website: string;
  state: string;
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
