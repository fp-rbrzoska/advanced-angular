import { Component } from '@angular/core';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-proj';
  constructor(private ns: NotificationService){

  }

  notify(){
    this.ns.pushNotification('test msg');
  }
}
