import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { TestDirective } from './test.directive';



@NgModule({
  declarations: [
    NotificationComponent,
    NotificationContainerComponent,
    TestDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationContainerComponent,
    NotificationComponent,
    TestDirective
  ],
  entryComponents: [NotificationComponent]
})
export class SharedModule { }
