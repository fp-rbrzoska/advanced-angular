import { InjectionToken } from '@angular/core';
import { Logger } from './models/logger.interface';

export const testToken = new InjectionToken('TEST');
export const loggers = new InjectionToken<Logger[]>('Loggers');
