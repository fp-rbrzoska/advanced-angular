import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(private userService: UsersService) {
    this.users$ = this.userService.users$;
    this.userService.fetchUsers();

  }

  ngOnInit() {
  }

}
