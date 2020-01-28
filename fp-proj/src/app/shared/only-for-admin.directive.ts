import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[appOnlyForAdmin]'
})
export class OnlyForAdminDirective implements OnInit {

  constructor(private temp: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      if (user && user.admin) {
        this.vcr.createEmbeddedView(this.temp);
      } else {
        this.vcr.clear();
      }
    });
  }
}
