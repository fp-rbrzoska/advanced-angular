import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyForAdminDirective } from './only-for-admin.directive';

@NgModule({
  declarations: [OnlyForAdminDirective],
  imports: [
    CommonModule
  ],
  exports: [OnlyForAdminDirective]
})
export class SharedModule { }
