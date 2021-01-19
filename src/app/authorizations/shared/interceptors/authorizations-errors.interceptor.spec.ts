import { TestBed } from '@angular/core/testing';

import { AuthorizationsErrorsInterceptor } from './authorizations-errors.interceptor';

describe('AuthorizationsErrorsService', () => {
  let service: AuthorizationsErrorsInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationsErrorsInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
