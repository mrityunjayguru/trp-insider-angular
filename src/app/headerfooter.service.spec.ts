import { TestBed } from '@angular/core/testing';

import { HeaderfooterService } from './headerfooter.service';

describe('HeaderfooterService', () => {
  let service: HeaderfooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderfooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
