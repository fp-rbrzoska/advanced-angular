import { Directive, ElementRef, ViewContainerRef, TemplateRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTest]',
  exportAs: 'test'
})
export class TestDirective implements OnInit{

  @Input()
  set appTest(show: boolean) {
    if (show) {
      this.vcr.createEmbeddedView(this.template);
    } else {
      this.vcr.clear();
    }
  }

  constructor(
    private el: ElementRef,
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>) {
   }

   ngOnInit() {
   }

   clear() {
    this.vcr.clear();
   }
}
