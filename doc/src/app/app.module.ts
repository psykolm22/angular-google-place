import { ChildDirective } from './directives/app.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularGooglePlaceModule} from 'angular-google-place';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularGooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
