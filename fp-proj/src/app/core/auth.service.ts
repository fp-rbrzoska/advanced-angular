import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, map, distinctUntilChanged} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserState } from '../models/user.interface';

@Injectable()
export class AuthService {

  private history: {action: string, state: UserState} [] = [];

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
    this.history.push({ state: this.store.getValue(), action: 'INIT'});
  }

  setState(state: Partial<UserState>, action: string) {
    const currentState = this.store.getValue();
    const newState = {...currentState, ...state };
    this.store.next(newState);
    this.history.push({ state: newState, action } );
  }

  login(login: string) {
    this.setState({ pending: true }, 'LOGIN_START');
    this.http.get<UserState>('/api/auth/' + login).subscribe(
      u => this.setState({...u, pending: false}, 'LOGIN_END')
    );
  }

  logout() {
    this.setState({
      admin: null,
      username: null,
      pending: false
    }, 'LOGOUT');
  }

  getHistory() {
    return this.history;
  }

}
