import { TestBed } from '@angular/core/testing';

import { AuthorizationsLoadingInterceptor } from './authorizations-loading.interceptor';

describe('AuthorizationsLoadingService', () => {
  let service: AuthorizationsLoadingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsLoadingInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
