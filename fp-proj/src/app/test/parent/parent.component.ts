import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, Renderer2, ElementRef, ɵConsole } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  ids = ['id1', 'id2'];
  posts = [{
    id:  '1',
    type: 'img',
    title: 'Image title xxxxx',
    data: 'http://url.com/img.jpg'
  },
  {
    id: '2',
    type: 'text',
    title: 'Text titleT',
    data: 'asdasdas das dasd asdasd asd asdasdasd asd asd asdasdasd'
  }];

  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;
  @ViewChild(ChildComponent, { static: false }) childComponent: ChildComponent;
  @ViewChild('searchInput', { static: true }) input: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.input);
    // this.renderer.listen(this.input.nativeElement, 'keyup', ev => console.log(ev));
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      debounceTime(200)
    ).subscribe(e => console.log(e));
  }

  ngAfterViewInit() {
    this.children.changes.subscribe(() => {
      console.log('dodano element');
    });
    console.log(this.children)
    console.log(this.childComponent.data);
  }

  addElement() {
    this.ids.push('idxxx');
  }

}
