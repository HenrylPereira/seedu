import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecomendacaoSliderInterface } from './interfaces/recomendacao-slider.interface';
import { RecomendacaoSliderService } from './services/recomendacao-slider.service';

@Component({
  selector: 'app-recomendacao-slider',
  templateUrl: './recomendacao-slider.component.html',
  styleUrls: ['./recomendacao-slider.component.scss'],
})
export class RecomendacaoSliderComponent implements OnInit {
  cards$: any;

  constructor(private recomendacaoSliderService: RecomendacaoSliderService) { }

  ngOnInit() {
    this.recomendacaoSliderService.getMaterias().subscribe((cards)=>{
      this.cards$ = cards;
    });
  }
}
