import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MainModule } from './main/main.module';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)}
];

@NgModule({
  imports: [MainModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
