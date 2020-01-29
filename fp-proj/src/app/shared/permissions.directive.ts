import { Directive, ViewContainerRef, TemplateRef, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPermissions]'
})
export class PermissionsDirective implements OnInit, OnDestroy {

  private subscription: Subscription;
  @Input() appPermissions: string;
  constructor(private authService: AuthService, private vcr: ViewContainerRef, private temp: TemplateRef<any>) { }

  ngOnInit() {
    this.subscription = this.authService.authorizationData$.subscribe(
      data => {
        this.vcr.clear();
        if (data && data.role && this.appPermissions === data.role) {

          this.vcr.createEmbeddedView(this.temp);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
