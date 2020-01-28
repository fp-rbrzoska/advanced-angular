import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user$: Observable<User>;
  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
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
