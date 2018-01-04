export interface Address {
   address_components: Array<AddressComponent>;
   adr_address: string;
   formatted_address: string;
   geometry: Coordonate;
   html_attributions: Array<any>;
   icon: string;
   id: string;
   name: string;
   place_id: string;
   reference: string;
   publicscope: string;
   publictypes: Array<any>;
   publicurl: string;
   publicutc_offset: number;
   publicvicinity: string;
   publicphotos: Array<Photos>;
   url: string;
   types: Array<string>;
   utc_offset: any;
   vicinity: any;
   photos: any;
}

export interface Coordonate {
  location: Location;
  viewport: any;
}

export interface Location {
  lat: any;
  lng: any;
}

export interface Photos {
  height: string;
  width: string;
  html_attributions: Array<string>;
  getUrl: any;
}

export interface AutoCompleteOptions {
    // The area in which to search for places. Results are biased towards, but not restricted to,
    // places contained within these bounds.
    bounds: any;
    // The component restrictions. Component restrictions are used to restrict predictions to only
    // those within the parent component. E.g., the country.
    componentRestrictions: ComponentRestrictions;
    // The types of predictions to be returned. For a list of supported types,
    // see the developer's guide. If nothing is specified, all types are returned.
    // In general only a single type is allowed. The exception is that you can safely mix the
    // 'geocode' and 'establishment' types, but note that this will have the same effect as
    // specifying no types.
    types: Array<string>;
}

export interface ComponentRestrictions {
    // Restricts predictions to the specified country (ISO 3166-1 Alpha-2 country code,
    // case insensitive). E.g., us, br, au.
    country: string;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: Array<string>;
  [name: string]: any;
}

export interface CountryCode {
  Name: string;
  Code: string;
}
