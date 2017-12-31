import { AngularGooglePlaceConstantService } from './constants/index';
import { AngularGooglePlaceDirective } from './directives/index';
import { AngularGooglePlaceService } from './services/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularGooglePlaceDirective],
  providers : [ AngularGooglePlaceService, AngularGooglePlaceConstantService ],
  exports: [AngularGooglePlaceDirective]
})
export class AngularGooglePlaceModule { }
