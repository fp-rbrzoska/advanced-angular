import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login('alojzy').subscribe(u => this.user = u);
  }

  logout() {
    this.user = null;
  }

}
