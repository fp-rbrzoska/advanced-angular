import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { PermissionsDirective } from './permissions.directive';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [TestDirective, PermissionsDirective, NotificationContainerComponent, NotificationComponent],
  imports: [
    CommonModule,

  ],
  exports: [TestDirective, PermissionsDirective, NotificationContainerComponent],
  entryComponents: [NotificationComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [NotificationService]
    };
  }
}
