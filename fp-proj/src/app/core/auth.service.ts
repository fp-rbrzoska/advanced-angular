import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, map, distinctUntilChanged} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserState } from '../models/user.interface';

@Injectable()
export class AuthService {

  private history: UserState[] = [];

  private store = new BehaviorSubject<UserState>({
    admin: null,
    username: null,
    pending: false
  });

  get userState$() {
    return this.store.asObservable();
  }

  get isAdminState$() {
    return this.userState$.pipe(
      map( u => u.admin),
      distinctUntilChanged());
  }

  get usernameState$() {
    return this.userState$.pipe(
      map( u => u.username),
      distinctUntilChanged());
  }

  get pendingUserState$() {
    return this.userState$.pipe(
      map( u => u.pending),
      distinctUntilChanged());
  }

  constructor(private http: HttpClient) {
    this.store.subscribe((s) => this.history.push(s));
  }

  setState(state: Partial<UserState>) {
    const currentState = this.store.getValue();
    this.store.next({...currentState, ...state });
  }

  login(login: string) {
    this.setState({ pending: true });
    this.http.get<UserState>('/api/auth/' + login).subscribe(
      u => this.setState({...u, pending: false})
    );
  }

  logout() {
    this.setState({
      admin: null,
      username: null,
      pending: false
    });
  }

  getHistory() {
    return this.history;
  }

}
