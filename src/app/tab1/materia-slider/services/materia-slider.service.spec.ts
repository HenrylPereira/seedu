import { TestBed } from '@angular/core/testing';

import { MateriaSliderService } from './materia-slider.service';

describe('MateriaSliderService', () => {
  let service: MateriaSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriaSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
