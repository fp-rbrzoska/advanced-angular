import { Directive, ElementRef, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

  constructor(private el: ElementRef,
    private temp: TemplateRef<any>,
    private vcr: ViewContainerRef) {
      console.log(vcr);
      console.log(temp);
  }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.temp);
  }

}
