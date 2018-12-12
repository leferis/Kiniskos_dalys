import { TestBed } from '@angular/core/testing';

import { DbCarsService } from './db-cars.service';

describe('DbCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbCarsService = TestBed.get(DbCarsService);
    expect(service).toBeTruthy();
  });
});
