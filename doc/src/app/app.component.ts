import { DialogDataExampleDialog } from './dialogdata.component';
import { Address, AngularGooglePlaceService, AngularGooglePlaceConstantService } from 'angular-google-place';
import { Component, Inject, AfterContentInit, AfterViewInit, QueryList, ContentChildren, ViewChildren } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typesOptions: string[];
  postalCode: string;
  public options = {type: 'address', componentRestrictions: { country: 'FR' }};

  constructor(public dialog: MatDialog, public service: AngularGooglePlaceService, public constant: AngularGooglePlaceConstantService) {
    console.log(service);
    this.typesOptions = this.constant.types_options();
  }
  getAddress(place: Address) {
         console.log('Address', place);
     }


savePostalCode(event: any) {
  this.postalCode = event;
  console.log(event);
}

FormatAddress(event: any) {
  console.log(event);
}

        openDialog() {
          this.dialog.open(DialogDataExampleDialog);
        }
      }


