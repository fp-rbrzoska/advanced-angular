import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap, map } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-proj';
  isMobile$;

  constructor(private observer: BreakpointObserver) {
    this.isMobile$ = observer.observe('(max-width: 599px)').pipe(
      map(v => v.matches),
      tap(v => console.log(v))
    )
  }
}
