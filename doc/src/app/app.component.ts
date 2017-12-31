import { Address } from 'angular-google-place';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public options = {types: ['address'], componentRestrictions: { country: 'FR' }};
  getAddress(place: Address) {
         console.log('Address', place);
     }
}