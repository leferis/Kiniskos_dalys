import { TestBed } from '@angular/core/testing';

import { DBaseService } from './d-base.service';

describe('DBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBaseService = TestBed.get(DBaseService);
    expect(service).toBeTruthy();
  });
});
