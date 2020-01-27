import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {

  private compFactory: ComponentFactory<NotificationComponent>
  @ViewChild('container', { static: true, read: ViewContainerRef }) vcr: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) {
    this.compFactory = cfr.resolveComponentFactory(NotificationComponent);
   }

  ngOnInit() {
  }
  notify() {
    const comp = this.vcr.createComponent(this.compFactory);
    setTimeout(() => {
      comp.destroy();
    }, 3000)
  }

}
