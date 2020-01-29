import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';
import { PermissionsDirective } from './permissions.directive';

@NgModule({
  declarations: [TestDirective, PermissionsDirective],
  imports: [
    CommonModule
  ],
  exports: [TestDirective, PermissionsDirective]
})
export class SharedModule { }
