import { TestBed } from '@angular/core/testing';

import { FinanceRecordService } from './finance-record.service';

describe('FinanceRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinanceRecordService = TestBed.get(FinanceRecordService);
    expect(service).toBeTruthy();
  });
});
