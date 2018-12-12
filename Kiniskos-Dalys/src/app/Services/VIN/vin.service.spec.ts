import { TestBed } from '@angular/core/testing';

import { VINService } from './vin.service';

describe('VINService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VINService = TestBed.get(VINService);
    expect(service).toBeTruthy();
  });
});
