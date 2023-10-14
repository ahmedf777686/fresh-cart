import { TestBed } from '@angular/core/testing';

import { Authdata1Service } from './authdata1.service';

describe('Authdata1Service', () => {
  let service: Authdata1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authdata1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
