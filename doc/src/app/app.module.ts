import { DialogDataExampleDialog } from './dialogdata.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularGooglePlaceModule} from 'angular-google-place';

import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularGooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDataExampleDialog
]
})
export class AppModule { }
