import { TestBed } from '@angular/core/testing';
import { RecomendacaoSliderService } from './recomendacao-slider.service';


describe('RecomendacaoSliderService', () => {
  let service: RecomendacaoSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendacaoSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
