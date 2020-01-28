import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { UserState } from '../models/user.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  username$: Observable<string>;

  constructor(private authService: AuthService) {
    this.username$ = this.authService.usernameState$;
   }

  ngOnInit() {
  }

  login() {
    this.authService.login('alojzy');
  }

  logout() {
    this.authService.logout();
  }

}
