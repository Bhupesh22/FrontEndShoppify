import { TestBed } from '@angular/core/testing';

import { RetailerRegisterService } from './retailer-register.service';

describe('RetailerRegisterService', () => {
  let service: RetailerRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailerRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
