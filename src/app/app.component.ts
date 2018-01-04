import { Address , AngularGooglePlaceConstantService } from '../lib/angular-google-place/index';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public address: any;
  public typesOptions: string[];
  public options = {type: 'address', componentRestrictions: { country: 'FR' }};

  constructor( public constant: AngularGooglePlaceConstantService){
    this.typesOptions = this.constant.types_options();
  }
  getAddress(place: Address) {
         console.log('Address', place);
     }
     FormatAddress(event: any) {
       console.log(event);
     }
     onChange(event: any) {
       console.log(event);
       if (event === 'country') {
         this.options = { type: 'country', componentRestrictions: { country: null }  };
       }
      this.address = '';
     }

}
