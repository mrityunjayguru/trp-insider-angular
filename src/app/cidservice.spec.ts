import { TestBed } from '@angular/core/testing';

import { Cidservice } from './cidservice';

describe('Cidservice', () => {
  let service: Cidservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cidservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
