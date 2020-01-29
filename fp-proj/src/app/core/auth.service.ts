import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private authSubj = new BehaviorSubject<any>(null);

  authorizationData$ = this.authSubj.asObservable();

  constructor(private http: HttpClient) { }

  login(login: string) {
    this.http.get<any>('/api/auth/' + login).subscribe(x => this.authSubj.next(x));
  }

  logout() {
    this.authSubj.next(null);
  }

}
