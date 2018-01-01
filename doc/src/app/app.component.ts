import { DialogDataExampleDialog } from './dialogdata.component';
import { Address } from 'angular-google-place';
import { Component, Inject, AfterContentInit, AfterViewInit, QueryList, ContentChildren, ViewChildren } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options = {types: ['address'], componentRestrictions: { country: 'FR' }};

  constructor(public dialog: MatDialog) {}
  getAddress(place: Address) {
         console.log('Address', place);
     }





        openDialog() {
          this.dialog.open(DialogDataExampleDialog, {
            data: {
              animal: 'panda'
            }
          });
        }
      }


