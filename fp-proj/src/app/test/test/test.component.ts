import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit{

  @ViewChild(ChildComponent, { static: true }) childElement: ChildComponent;
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;
  showTest = true;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  changeChildren() {
    this.children.forEach(c => c.changeChildData());
  }

}
