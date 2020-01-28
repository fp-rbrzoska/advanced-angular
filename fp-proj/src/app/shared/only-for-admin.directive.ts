import { Directive, OnInit, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appOnlyForAdmin]'
})
export class OnlyForAdminDirective implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private temp: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => {
      if (user && user.admin) {
        this.vcr.createEmbeddedView(this.temp);
      } else {
        this.vcr.clear();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
