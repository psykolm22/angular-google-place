import { DialogDataExampleDialog } from './dialogdata.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { AngularGooglePlaceModule} from 'angular-google-place';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
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
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    AngularGooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDataExampleDialog
]
})
export class AppModule { }
