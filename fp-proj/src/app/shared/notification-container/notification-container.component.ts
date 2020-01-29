import { Component, OnInit, ComponentFactoryResolver, ViewChildren, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styles: [`:host {
    position: fixed;
    right: 10px;
    top: 10px;
  }`]
})
export class NotificationContainerComponent implements OnInit {

  private componentFactory: ComponentFactory<NotificationComponent>;
  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private notificationService: NotificationService,
    private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.componentFactory = this.cfr.resolveComponentFactory(NotificationComponent);
    this.notificationService.msgs$.subscribe(msg => this.showNotification(msg))
  }

  showNotification(msg) {
    const comp = this.container.createComponent(this.componentFactory);
    comp.instance.msg = msg;
    setTimeout(() => {
      comp.destroy();
    }, 3000)
  }
}
