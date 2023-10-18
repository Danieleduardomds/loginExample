import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canActiveGuard } from './can-active.guard';

describe('canActiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
