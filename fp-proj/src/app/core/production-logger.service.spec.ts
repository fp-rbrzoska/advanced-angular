import { TestBed } from '@angular/core/testing';

import { ProductionLoggerService } from './production-logger.service';

describe('ProductionLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionLoggerService = TestBed.get(ProductionLoggerService);
    expect(service).toBeTruthy();
  });
});
