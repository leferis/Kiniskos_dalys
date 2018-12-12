import { TestBed } from '@angular/core/testing';

import { AtsiliepimasDarbuotojasService } from './atsiliepimas-darbuotojas.service';

describe('AtsiliepimasDarbuotojasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtsiliepimasDarbuotojasService = TestBed.get(AtsiliepimasDarbuotojasService);
    expect(service).toBeTruthy();
  });
});
