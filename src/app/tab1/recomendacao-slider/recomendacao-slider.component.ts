import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private recomendacaoSliderService: RecomendacaoSliderService, private router: Router) { }

  ngOnInit() {
    this.recomendacaoSliderService.getMaterias().subscribe((cards)=>{
      this.cards$ = cards;
    });
  }

  public abrirCurso(id: string){
    this.router.navigate(['app/cursos/curso']);
  }
}
