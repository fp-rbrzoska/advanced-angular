import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
export const CONFIG = {};

const routes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: [UsersComponent, UserItemComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }
