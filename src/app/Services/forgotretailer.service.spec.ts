import { TestBed } from '@angular/core/testing';

import { ForgotretailerService } from './forgotretailer.service';

describe('ForgotretailerService', () => {
  let service: ForgotretailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotretailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
