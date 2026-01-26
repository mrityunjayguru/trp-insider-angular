import { TestBed } from '@angular/core/testing';

import { ImgconfigService } from './imgconfig.service';

describe('ImgconfigService', () => {
  let service: ImgconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
