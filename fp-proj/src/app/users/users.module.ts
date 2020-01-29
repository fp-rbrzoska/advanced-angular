import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
