import { Injectable } from '@angular/core';
import { Logger } from '../models/logger.interface';

@Injectable()
export class ProductionLoggerService implements Logger {

  constructor() { }

  log(val: any) {
    console.log(val);
  }
}
