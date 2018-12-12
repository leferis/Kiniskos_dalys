import { TestBed } from '@angular/core/testing';

import { TukstamasService } from './tukstamas.service';

describe('TukstamasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TukstamasService = TestBed.get(TukstamasService);
    expect(service).toBeTruthy();
  });
});
