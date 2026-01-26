import { TestBed } from '@angular/core/testing';

import { NetworkerrorInterceptor } from './networkerror.interceptor';

describe('NetworkerrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NetworkerrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NetworkerrorInterceptor = TestBed.inject(NetworkerrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
