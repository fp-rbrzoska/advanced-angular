import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit {

  @Input() data;
  childData = [1, 2, 3];
  @ContentChild('postTitle', {static: true}) title: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  like() {
    console.log('like');
  }
  ngAfterContentInit() {
    console.log(this.title)
  }

}
