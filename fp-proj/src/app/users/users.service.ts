import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  avatar: string;
  username: string;
  city: string;
  country: string;
  registered: number;
}

@Injectable()
export class UsersService {
  private usersSubj = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubj.asObservable();
  constructor(private http: HttpClient) {}

  fetchUsers(limit = 10) {
    this.http.get<User[]>('/api/users', {
      params: { _limit: limit.toString() }
    });
  }
}
