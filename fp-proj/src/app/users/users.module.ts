import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersService } from './users.service';
import { UsersItemComponent } from './users-item/users-item.component';

const routes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersService]
})
export class UsersModule { }
