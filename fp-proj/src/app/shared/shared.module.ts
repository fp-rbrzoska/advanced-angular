import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { TestDirective } from './test.directive';
import { MyIfDirective } from './my-if.directive';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationContainerComponent,
    TestDirective,
    MyIfDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationContainerComponent,
    NotificationComponent,
    TestDirective, MyIfDirective
  ],
  entryComponents: [NotificationComponent]
})
export class SharedModule { }
