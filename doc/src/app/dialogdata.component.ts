import { Address } from 'angular-google-place';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  public options = {types: ['address'], componentRestrictions: { country: 'FR' }};
  getAddress(place: Address) {
         console.log('Address', place);
     }
}
