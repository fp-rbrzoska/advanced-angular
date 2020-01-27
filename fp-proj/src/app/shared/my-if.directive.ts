import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  @Input()
  set appMyIf(show) {
    if (show) {
      this.vcr.createEmbeddedView(this.temp);
    } else {
      this.vcr.clear();
    }
  }

  constructor( private vcr: ViewContainerRef, private temp: TemplateRef<any>) { }
}
