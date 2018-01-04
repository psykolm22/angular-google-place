# angular-google-place
This is a Angular-Google-Place Module publish with Angular Format Package ( ng-packgr)

[![NPM](https://nodei.co/npm/angular-google-place.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/angular-google-place/)

[![devDependency Status](https://gemnasium.com/badges/github.com/psykolm22/angular-google-place.svg)](https://gemnasium.com/github.com/psykolm22/angular-google-place) 
[![npm](http://img.shields.io/npm/v/angular-google-place.svg?style=flat)](https://www.npmjs.org/package/angular-google-place) 
[![npm Downloads](https://img.shields.io/npm/dw/angular-google-place.svg?style=flat-square)](https://www.npmjs.com/package/ng-packagr)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square)](https://renovateapp.com/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bc6faa59e1904c2c95217666541ff3b3)](https://www.codacy.com/app/pierrenedelec/angular-google-place?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=psykolm22/angular-google-place&amp;utm_campaign=Badge_Grade)

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![license](https://img.shields.io/github/license/psykolm22/angular-google-place.svg)]()
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)


[Docs](https://psykolm22.github.io/angular-google-place/docs/) | [Demo](https://psykolm22.github.io/angular-google-place/) 


#Release Notes
Please take care of [Release Note](https://github.com/psykolm22/angular-google-place/releases) before creating issues.  


# GitHub
Please feel free to declare issues or contribute  : https://github.com/psykolm22/angular-google-place

# Installation
:school_satchel: npm package can be consumed by [Angular CLI](https://github.com/angular/angular-cli), [Webpack](https://github.com/webpack/webpack), or [SystemJS](https://github.com/systemjs/systemjs)

NPM

    npm install --save angular-google-place

YARN

    yarn add angular-google-place --save

# Don't forget to add google api in your index.html
* in your index.html:
```html
<script  type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places&key=GOOGLE_API_KEY"></script>
```
Replace by our Google api key .

# Usage
* Use it in your HTML elements, for example in your ***.component.html:
```html
<input type="text" [(ngModel)] = "address" 
 [options]='options' 
 (setAddress) = "getAddress($event)"
 (FormatAddress)="getFormattedAddress($event)"
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
 (CountryCodes)='CountryCodes=$event'
  id="autocomplete"
 angularGooglePlace/> 
```
* Add in your ***.component.ts:
* check CHANGELOG.md  , types have change to type.
```typeScript
import { Address } from 'angular-google-place';

 export class AppComponent {
  public options = {type : 'address', componentRestrictions: { country: 'FR' }};
  getAddress(place: Address) {
         console.log('Address', place);
     }
  getFormattedAddress(event: any) {
         console.log(event);
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
  [ '(cities)',
        '(regions)',
        'country',
        'postal_code',
        'locality',
        'sublocality',
        'address',
        'geocode',
        'administrative_area_level_1',
        'administrative_area_level_2',] 
```  
* country ( dynamic change allow) : CountryCode ISO 3166-1 Alpha-2 ( see demo )
```html  
[options]="{
    type: 'address',
    componentRestrictions: { country: 'FR' }
    }"
```


#Tested in:
* Chrome
* Firefox
* Safari


#For AngularJS:
https://github.com/vskosp/vsGoogleAutocomplete



