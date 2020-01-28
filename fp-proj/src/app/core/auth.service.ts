import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
@Injectable()
export class AuthService {

  user;
  constructor(private http: HttpClient) { }

  login(login: string) {
    return this.http.get<any>('/api/auth/' + login).pipe(
      tap(u => this.user = u)
    );
  }

}
