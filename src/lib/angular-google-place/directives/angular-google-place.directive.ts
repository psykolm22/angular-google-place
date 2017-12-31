import {
  Directive,
  Input,
  Output,
  NgZone,
  ElementRef,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';
import {AngularGooglePlaceService} from '../services/index';
import {Address} from '../models/index';
declare let google: any;

@Directive({
  selector: '[angularGooglePlace]'
})
export class AngularGooglePlaceDirective implements OnInit, OnChanges {
  @Input('options') options: any;

  @Output() CountryCodes: EventEmitter<any> = new EventEmitter();

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
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

  autocomplete: any;

  trigger: any;

  place: Address;

  constructor(private el: ElementRef, private service: AngularGooglePlaceService, private ngZone: NgZone) {

  }

  ngOnChanges(event: any) {
    if (event.options.previousValue && event.options.currentValue) {
      if (event.options.currentValue.componentRestrictions.country !== event.options.previousValue.componentRestrictions.country) {
        this.setAutocompleteAndInvokeEvent(event.options.currentValue);
      }
    }
  }

  ngOnInit() {

    this.CountryCodes.emit(this.service.countryIsoCode());


    if (typeof google === 'undefined' ) {
      console.error(`google place api is not loaded at this time, angular-google-place won't work`);
      return;
    }

    this.setAutocompleteAndInvokeEvent(this.options);
  }

  setAutocompleteAndInvokeEvent(options: any) {
    this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, options);
    this.trigger = this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        this.place = this.autocomplete.getPlace();
        if (this.place && this.place.place_id) {
          this.invokeEvent();
        }
      });
    });
  }


  invokeEvent() {
    this.setAddress.emit(this.place);

    this.street_number.emit(this.service.street_number(this.place.address_components) ?
      this.service.street_number(this.place.address_components) :
      null);
    this.street.emit(this.service.street(this.place.address_components) ?
      this.service.street(this.place.address_components) :
      null);
    this.city.emit(this.service.city(this.place.address_components) ?
      this.service.city(this.place.address_components) :
      null);
    this.state.emit(this.service.state(this.place.address_components) ?
      this.service.state(this.place.address_components) :
      null);
    this.country.emit(this.service.country(this.place.address_components) ?
      this.service.country(this.place.address_components) :
      null);
    this.postal_code.emit(this.service.postal_code(this.place.address_components) ?
      this.service.postal_code(this.place.address_components) :
      null);
    this.district.emit(this.service.administrative_area_level_2(this.place.address_components) ?
      this.service.administrative_area_level_2(this.place.address_components) :
      null);
    this.lat.emit(this.place.geometry.location.lat() ?
      this.place.geometry.location.lat() :
      null);
    this.lng.emit(this.place.geometry.location.lng() ?
      this.place.geometry.location.lng() :
      null);
    this.adr_address.emit(this.place.adr_address ?
      this.place.adr_address :
      null);
    this.formatted_address.emit(this.place.formatted_address ?
      this.place.formatted_address :
      null);
    this.name.emit(this.place.name ?
      this.place.name :
      null);
    this.place_id.emit(this.place.place_id ?
      this.place.place_id :
      null);
    this.types.emit(this.place.types ?
      this.place.types :
      null);
    this.url.emit(this.place.url ?
      this.place.url :
      null);
    this.utc_offset.emit(this.place.utc_offset ?
      this.place.utc_offset :
      null);
    this.vicinity.emit(this.place.vicinity ?
      this.place.vicinity :
      null);
    this.photos.emit(this.place.photos ?
      this.place.photos :
      null);

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
