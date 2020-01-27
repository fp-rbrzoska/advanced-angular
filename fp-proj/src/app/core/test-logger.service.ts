import { Injectable } from '@angular/core';
import { Logger } from '../models/logger.interface';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';

@Injectable()
export class TestLoggerService implements Logger, HttpInterceptor {


  constructor() { }

  log(val: any) {
    console.error(val);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('interceptor test logger')
    this.log(req.url);
    return next.handle(req.clone({
      headers: req.headers.set('Authorization', 'asdasdasdasd')
    }));
  }
}
