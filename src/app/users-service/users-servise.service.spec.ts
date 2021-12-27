import { TestBed } from '@angular/core/testing';

import { UsersServiseService } from './users-servise.service';

describe('UsersServiseService', () => {
  let service: UsersServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
