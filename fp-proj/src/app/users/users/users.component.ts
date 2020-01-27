import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$;
  @ViewChildren(UserItemComponent) userItems: QueryList<UserItemComponent>
  constructor(private httpClient: HttpClient) {

    this.users$ = httpClient.get('http://localhost:3000/users');
   }

  ngOnInit() {
  }

  showAges() {
    this.userItems.forEach( i => i.showAge = true)
  }
}
