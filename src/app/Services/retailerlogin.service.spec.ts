import { TestBed } from '@angular/core/testing';

import { RetailerloginService } from './retailerlogin.service';

describe('RetailerloginService', () => {
  let service: RetailerloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
