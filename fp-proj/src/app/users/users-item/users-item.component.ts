import { Component, OnInit } from '@angular/core';
import { User } from '../users.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {

  showDetails = false;
  user: User = {
    "id": "fa7d7413-5bcf-4ed9-828a-9c009b9c4c81",
          "firstname": "Beatrice",
          "lastname": "Mcfarland",
          "avatar": "http://placehold.it/64x64",
          "username": "mollit",
          "city": "Manitou",
          "country": "PW",
          "registered": 1564029066135
  }
  constructor() { }

  ngOnInit() {
  }

}
