import { ContactFormComponent } from './contact-form/contact-form.component';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { tap, map } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-proj';
  isMobile$;
  @ViewChild('dialogTemp') dialogTemp: TemplateRef<any>;

  constructor(
    private dialog: MatDialog,
    private observer: BreakpointObserver) {

    this.isMobile$ = observer.observe('(max-width: 599px)').pipe(
      map(v => v.matches),
      tap(v => console.log(v))
    )
  }

  open() {
    const myDialog = this.dialog.open(ContactFormComponent, {
      data: {
        name: 'Alojzy Jeż'
      },
      disableClose: true
    });

    myDialog.afterClosed().subscribe(v => console.log(v))
  }
}
