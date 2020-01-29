import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {

  private msgSubject = new Subject();
  msgs$ = this.msgSubject.asObservable();

  constructor() { }

  pushNotification(msg) {
    this.msgSubject.next(msg);
  }
}
