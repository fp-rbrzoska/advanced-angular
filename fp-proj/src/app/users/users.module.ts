import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
