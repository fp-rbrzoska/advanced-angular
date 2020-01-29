import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { User } from '../users.service';
import { UsersItemComponent } from '../users-item/users-item.component';
import { noop } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChildren(UsersItemComponent) items: QueryList<UsersItemComponent>;
  @Input() users: User[];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.items.changes.subscribe(() => {
      setTimeout(() => this.items && this.items.first ? this.items.first.showDetails = true : noop());
    });
  }


}
