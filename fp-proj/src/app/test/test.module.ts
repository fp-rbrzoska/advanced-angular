import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
