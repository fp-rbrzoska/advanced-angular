import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  authData$: Observable<any>;
  constructor(private authService: AuthService) {
    this.authData$ = this.authService.authorizationData$;
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
