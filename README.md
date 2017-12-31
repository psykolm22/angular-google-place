# angular-google-place
This is a Angular-Google-Place Module publish with Angular Format Package ( ng-packgr)

[![NPM](https://nodei.co/npm/angular-google-place.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/angular-google-place/)

[![devDependency Status](https://gemnasium.com/badges/github.com/psykolm22/angular-google-place.svg)](https://gemnasium.com/github.com/psykolm22/ng2-google-place-autocomplete) [![npm](http://img.shields.io/npm/v/angular-google-place.svg?style=flat)](https://www.npmjs.org/package/angular-google-place) [![license](https://img.shields.io/github/license/psykolm22/angular-google-place.svg)]()

[Docs](https://psykolm22.github.io/angular-google-place) | [Demo](https://psykolm22.github.io/angular-google-place/) 

# GitHub
Please feel free to declare issues or contribute  : https://github.com/psykolm22/angular-google-place

# Installation

NPM

    npm install --save angular-google-place

YARN

    yarn add angular-google-place --save

# Don't forget to add google api in your index.html
* in your index.html:
```html
<script  type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
```

# Usage
* Use it in your HTML elements, for example in your ***.component.html:
```html
<input type="text" [(ngModel)] = "address" 
 [options]='options' 
 (setAddress) = "getAddress($event)"
 (street_number) = 'street_number=$event'
 (street)= 'street=$event'
 (city)= 'city=$event'
 (state)='state=$event'
 (district)='district=$event'
 (country)='country=$event'
 (postal_code)='postal_code=$event'
 (lat)='lat=$event' 
 (lng)='lng=$event' 
 (adr_address)='adr_address=$event' 
 (name)='name=$event' 
 (place_id)='place_id=$event' 
 (types)='types=$event' 
 (url)='url=$event'  
 (utc_offset)='utc_offset=$event' 
 (vicinity)='vicinity=$event' 
 (photos)='photos=$event' 
 (airport)='airport=$event' 
 (CountryCodes)='CountryCodes=$event'
  id="autocomplete"
 angularGooglePlace/> 
```
* Add in your ***.component.ts:
```typeScript
import { Address } from 'angular-google-place';

 export class AppComponent {
  public options = {types: ['address'], componentRestrictions: { country: 'FR' }};
  getAddress(place: Address) {
         console.log('Address', place);
     }
}
```

* Add GooglePlaceModule in your ***.module.ts:
```typeScript
import {AngularGooglePlaceModule} from 'angular-google-place';

@NgModule({
    ...
    import: [..., AngularGooglePlaceModule]
})
```

#Options
Options for Google Search
* Choose one type from
```
  [ '(cities)', '(regions)', 'country', 'postal_code', 'sublocality', 'establishment', 'address', 'geocode'] 
```  
* country ( dynamic change allow) : CountryCode ISO 3166-1 Alpha-2 ( see demo )
```html  
[options]="{
    types: [],
    componentRestrictions: { country: 'FR' }
    }"
```


#Tested in:
* Chrome
* Firefox
* Safari


#For AngularJS:
https://github.com/vskosp/vsGoogleAutocomplete



