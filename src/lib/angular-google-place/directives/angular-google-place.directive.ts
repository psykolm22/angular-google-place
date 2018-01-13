import {
  Directive,
  Input,
  Output,
  NgZone,
  ElementRef,
  EventEmitter,
  OnInit,
  OnChanges,
  HostListener,
  DoCheck,
  SimpleChanges
} from '@angular/core';
import {AngularGooglePlaceService} from '../services/index';
import {Address} from '../models/index';
declare let google: any;

@Directive({
  selector: '[angularGooglePlace]'
})
export class AngularGooglePlaceDirective implements OnInit {
  changelogs: Array<string> = [];
  @Input('options') options: any;

  @Output() CountryCodes: EventEmitter<any> = new EventEmitter();
  @Output() TypesOptions: EventEmitter<any> = new EventEmitter();

  // unformatted address
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  // formatted address
  @Output() FormatAddress: EventEmitter<any> = new EventEmitter();

  @Output() street_number: EventEmitter<any> = new EventEmitter();
  @Output() postal_code: EventEmitter<any> = new EventEmitter();
  @Output() country: EventEmitter<any> = new EventEmitter();
  @Output() lat: EventEmitter<any> = new EventEmitter();
  @Output() lng: EventEmitter<any> = new EventEmitter();
  @Output() adr_address: EventEmitter<any> = new EventEmitter();
  @Output() formatted_address: EventEmitter<any> = new EventEmitter();
  @Output() name: EventEmitter<any> = new EventEmitter();
  @Output() place_id: EventEmitter<any> = new EventEmitter();
  @Output() types: EventEmitter<any> = new EventEmitter();
  @Output() url: EventEmitter<any> = new EventEmitter();
  @Output() utc_offset: EventEmitter<any> = new EventEmitter();
  @Output() vicinity: EventEmitter<any> = new EventEmitter();
  @Output() photos: EventEmitter<any> = new EventEmitter();
  @Output() street: EventEmitter<any> = new EventEmitter();
  @Output() city: EventEmitter<any> = new EventEmitter();
  @Output() state: EventEmitter<any> = new EventEmitter();
  @Output() district: EventEmitter<any> = new EventEmitter();


  /*
   NOT USED YET
   @Output() intersection: EventEmitter<any>  = new EventEmitter();
   @Output() political: EventEmitter<any>  = new EventEmitter();
   @Output() colloquial_area: EventEmitter<any>  = new EventEmitter();
   @Output() ward: EventEmitter<any>  = new EventEmitter();
   @Output() administrative_area_level_3: EventEmitter<any>  = new EventEmitter();
   @Output() administrative_area_level_4: EventEmitter<any>  = new EventEmitter();
   @Output() administrative_area_level_5: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality_level_1: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality_level_2: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality_level_3: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality_level_4: EventEmitter<any>  = new EventEmitter();
   @Output() sublocality_level_5: EventEmitter<any>  = new EventEmitter();
   @Output() neighborhood: EventEmitter<any>  = new EventEmitter();
   @Output() premise: EventEmitter<any>  = new EventEmitter();
   @Output() subpremise: EventEmitter<any>  = new EventEmitter();
   @Output() natural_feature: EventEmitter<any>  = new EventEmitter();
   @Output() airport: EventEmitter<any>  = new EventEmitter();
   @Output() park: EventEmitter<any>  = new EventEmitter();
   @Output() point_of_interest: EventEmitter<any>  = new EventEmitter();
   @Output() floor: EventEmitter<any>  = new EventEmitter();
   @Output() establishment: EventEmitter<any>  = new EventEmitter();
   @Output() parking: EventEmitter<any>  = new EventEmitter();
   @Output() post_box: EventEmitter<any>  = new EventEmitter();
   @Output() room: EventEmitter<any>  = new EventEmitter();
   @Output() postal_town: EventEmitter<any>  = new EventEmitter();
   @Output() bus_station: EventEmitter<any>  = new EventEmitter();
   @Output() train_station: EventEmitter<any>  = new EventEmitter();
   @Output() transit_station: EventEmitter<any>  = new EventEmitter();
   */

  autocomplete: any = null;

  trigger: any;

  place: Address;



  constructor(private el: ElementRef, private service: AngularGooglePlaceService, private ngZone: NgZone) {
  }

  @HostListener('focus', ['$event.target'])
  onFocus(target: any) {
      this.setAutocompleteAndInvokeEvent(this.options);
  }

  ngOnInit() {

    this.CountryCodes.emit(this.service.countryIsoCode());
    this.TypesOptions.emit(this.service.typesOptions());


    if (typeof google === 'undefined' ) {
      console.error(`google place api is not loaded at this time, angular-google-place won't work`);
      return;
    }
    this.setAutocompleteAndInvokeEvent(this.options);

  }


  setAutocompleteAndInvokeEvent(options: any) {
    if(this.autocomplete === null) {
      this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, options);
      this.trigger = this.autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          this.place = this.autocomplete.getPlace();
          if (this.place && this.place.place_id) {
            this.invokeEvent();
          }
        });
      });
    } else {
      this.autocomplete.setOptions(options);
    }
  }


  invokeEvent() {
    this.setAddress.emit(this.place);

    const street_number = this.service.street_number(this.place.address_components);
    this.street_number.emit( street_number);

    const street = this.service.street(this.place.address_components);
    this.street.emit(street);

    const city = this.service.city(this.place.address_components);
    this.city.emit(city);

    const state = this.service.state(this.place.address_components);
    this.state.emit(state);

    const country = this.service.country(this.place.address_components);
    this.country.emit(country);

    const postal_code  = this.service.postal_code(this.place.address_components);
    this.postal_code.emit(postal_code);

    const district = this.service.administrative_area_level_2(this.place.address_components);
    this.district.emit(district);

    const lat = this.place.geometry.location.lat();
    this.lat.emit( lat);

    const lng = this.place.geometry.location.lng();
    this.lng.emit(lng);

    const adr_address = this.place.adr_address;
    this.adr_address.emit(adr_address);

    const formatted_address = this.place.formatted_address;
    this.formatted_address.emit(formatted_address);

    const name = this.place.name;
    this.name.emit(name);

    const place_id  = this.place.place_id;
    this.place_id.emit(place_id);

    const types = this.place.types;
    this.types.emit(types);

    const url = this.place.url;
    this.url.emit(url);

    const utc_offset = this.place.utc_offset;
    this.utc_offset.emit(utc_offset);

    const vicinity = this.place.vicinity;
    this.vicinity.emit(vicinity);

    const photos = this.place.photos;
    this.photos.emit(photos);

    this.FormatAddress.emit({
      'street_number' : street_number,
      'street' : street,
      'city' : city,
      'state' : state,
      'country' : country,
      'postal_code' : postal_code,
      'district' : district ,
      'lat' : lat,
      'lng' : lng,
    });

    /*
     DEPRECATED SINCE 2014
     this.place.id
     reference
     */


    /*
     NOT USED YET

     this.intersection.emit(this.service.intersection(this.place.address_components) ? this.service.intersection(this.place.address_components) : null)
     this.political.emit(this.service.political(this.place.address_components) ? this.service.political(this.place.address_components) : null)
     this.colloquial_area.emit(this.service.colloquial_area(this.place.address_components) ? this.service.colloquial_area(this.place.address_components) : null)

     this.ward.emit(this.service.ward(this.place.address_components) ? this.service.ward(this.place.address_components) : null)

     this.administrative_area_level_3.emit(this.service.administrative_area_level_3(this.place.address_components) ? this.service.administrative_area_level_3(this.place.address_components) : null)
     this.administrative_area_level_4.emit(this.service.administrative_area_level_4(this.place.address_components) ? this.service.administrative_area_level_4(this.place.address_components) : null)
     this.administrative_area_level_5.emit(this.service.administrative_area_level_5(this.place.address_components) ? this.service.administrative_area_level_5(this.place.address_components) : null)

     this.sublocality.emit(this.service.sublocality(this.place.address_components) ? this.service.sublocality(this.place.address_components) : null)
     this.sublocality_level_1.emit(this.service.sublocality_level_1(this.place.address_components) ?
     this.service.sublocality_level_1(this.place.address_components) : null);
     this.sublocality_level_2.emit(this.service.sublocality_level_2(this.place.address_components) ?
     this.service.sublocality_level_2(this.place.address_components) : null);
     this.sublocality_level_3.emit(this.service.sublocality_level_3(this.place.address_components) ?
     this.service.sublocality_level_3(this.place.address_components) : null);
     this.sublocality_level_4.emit(this.service.sublocality_level_4(this.place.address_components) ?
     this.service.sublocality_level_4(this.place.address_components) : null);
     this.sublocality_level_5.emit(this.service.sublocality_level_5(this.place.address_components) ?
     this.service.sublocality_level_5(this.place.address_components) : null);

     this.neighborhood.emit(this.service.neighborhood(this.place.address_components) ? this.service.neighborhood(this.place.address_components) : null)
     this.premise.emit(this.service.premise(this.place.address_components) ? this.service.premise(this.place.address_components) : null)
     this.subpremise.emit(this.service.subpremise(this.place.address_components) ? this.service.subpremise(this.place.address_components) : null)
     this.natural_feature.emit(this.service.natural_feature(this.place.address_components) ? this.service.natural_feature(this.place.address_components) : null)
     this.airport.emit(this.service.airport(this.place.address_components) ? this.service.airport(this.place.address_components) : null)
     this.park.emit(this.service.park(this.place.address_components) ? this.service.park(this.place.address_components) : null)
     this.point_of_interest.emit(this.service.point_of_interest(this.place.address_components) ? this.service.point_of_interest(this.place.address_components) : null)
     this.floor.emit(this.service.floor(this.place.address_components) ? this.service.floor(this.place.address_components) : null)
     this.establishment.emit(this.service.establishment(this.place.address_components) ? this.service.establishment(this.place.address_components) : null)
     this.parking.emit(this.service.parking(this.place.address_components) ? this.service.parking(this.place.address_components) : null)
     this.post_box.emit(this.service.post_box(this.place.address_components) ? this.service.post_box(this.place.address_components) : null)
     this.postal_town.emit(this.service.postal_town(this.place.address_components) ? this.service.postal_town(this.place.address_components) : null)
     this.room.emit(this.service.room(this.place.address_components) ? this.service.room(this.place.address_components) : null)
     this.bus_station.emit(this.service.bus_station(this.place.address_components) ? this.service.bus_station(this.place.address_components) : null)
     this.train_station.emit(this.service.train_station(this.place.address_components) ? this.service.train_station(this.place.address_components) : null)
     this.transit_station.emit(this.service.transit_station(this.place.address_components) ? this.service.transit_station(this.place.address_components) : null)
     */
  }

}
