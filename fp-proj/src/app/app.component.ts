import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pendingUser$;
  constructor(private authService: AuthService) {

    this.pendingUser$ = this.authService.pendingUserState$;
  }
  title = 'fp-proj';
  log() {
    console.log(this.authService.getHistory());
  }
}
