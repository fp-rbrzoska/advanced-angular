import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subj = new Subject();
  bSubj = new BehaviorSubject('b1');
  rSubj = new ReplaySubject(2);
  aSubj = new AsyncSubject();

  constructor() { }

  ngOnInit() {

    // this.subj.next(1);
    // this.subj.subscribe(x => console.log(x));
    // this.subj.next(2);


    // this.bSubj.next('b2');
    // this.bSubj.subscribe(x => console.log(x));

    // this.rSubj.next('r1');
    // this.rSubj.next('r2');
    // this.rSubj.next('r3');
    // this.rSubj.subscribe(x => console.log(x));

    // this.aSubj.next('a1');
    // this.aSubj.subscribe(x => console.log(x));
    // this.aSubj.next('a2');
    // this.aSubj.next('a3');
    // this.aSubj.complete();
  }

}
