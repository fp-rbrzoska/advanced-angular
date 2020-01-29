import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ HomeComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavigationComponent]
})
export class MainModule { }
