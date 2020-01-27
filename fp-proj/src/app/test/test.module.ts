import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [TestComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
