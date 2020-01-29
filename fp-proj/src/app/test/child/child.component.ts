import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childData = 0;
  constructor() { }

  ngOnInit() {
  }

  changeChildData() {
    this.childData = Math.random() * 1000;
  }

}
