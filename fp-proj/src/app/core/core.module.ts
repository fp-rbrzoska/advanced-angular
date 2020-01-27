import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../test.service';
import { testToken, loggers } from '../tokens';
import { ProductionLoggerService } from './production-logger.service';
import { TestLoggerService } from './test-logger.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{ provide: testToken, useClass: TestService },
    { provide: loggers, useClass: ProductionLoggerService, multi: true },
    //{ provide: loggers, useClass: TestLoggerService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TestLoggerService, multi: true }],

})
export class CoreModule { }
