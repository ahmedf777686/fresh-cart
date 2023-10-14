import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { frashcartGuard } from './frashcart.guard';

describe('frashcartGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => frashcartGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
