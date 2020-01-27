import { TestBed } from '@angular/core/testing';

import { TestLoggerService } from './test-logger.service';

describe('TestLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLoggerService = TestBed.get(TestLoggerService);
    expect(service).toBeTruthy();
  });
});
