import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  showDetails = false;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
