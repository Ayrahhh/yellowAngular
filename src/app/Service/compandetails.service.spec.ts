import { TestBed } from '@angular/core/testing';

import { CompandetailsService } from './compandetails.service';

describe('CompandetailsService', () => {
  let service: CompandetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompandetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
