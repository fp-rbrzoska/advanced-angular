import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.interface';
@Injectable()
export class AuthService {

  private userSubj = new BehaviorSubject<User>(null);
  get user$() {
    return this.userSubj.asObservable();
  }
  constructor(private http: HttpClient) { }

  login(login: string) {
    this.http.get<User>('/api/auth/' + login).subscribe(
      u => this.userSubj.next(u)
    );
  }

  logout() {
    this.userSubj.next(null);
  }

}
