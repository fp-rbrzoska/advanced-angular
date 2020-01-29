import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private authSubj = new BehaviorSubject<any>(null);

  authorizationData$ = this.authSubj.asObservable();

  constructor() { }

  login() {
    this.authSubj.next(true);
  }

  logout() {
    this.authSubj.next(false);
  }

}
