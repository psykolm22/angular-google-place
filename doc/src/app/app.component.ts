import { Address } from 'angular-google-place';
import { Component, AfterContentInit, AfterViewInit, QueryList, ContentChildren, ViewChildren } from '@angular/core';
import { ChildDirective} from './directives/app.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  queries: {
         contentChildren: new ContentChildren(ChildDirective),
         viewChildren: new ViewChildren(ChildDirective)
    },
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  contentChildren: QueryList<ChildDirective>;
  viewChildren: QueryList<ChildDirective>;
  public options = {types: ['address'], componentRestrictions: { country: 'FR' }};
  getAddress(place: Address) {
         console.log('Address', place);
     }


        ngAfterContentInit() {
          // contentChildren is set
          //console.log(this.contentChildren)
        }

        ngAfterViewInit() {
          // viewChildren is set
          //console.log(this.viewChildren)
        }
}
