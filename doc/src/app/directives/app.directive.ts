import {
  Directive,
  Input,
  Output,
  NgZone,
  ElementRef,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';


@Directive({
  selector: 'child-directive'
})
export class ChildDirective {

  test = false;
  constructor() {

  }



}
