import { TestBed } from '@angular/core/testing';

import { MapplsServiceService } from './mappls-service.service';

describe('MapplsServiceService', () => {
  let service: MapplsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapplsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
