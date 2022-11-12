import { Injectable } from '@angular/core';
import { dadosMateria } from 'mocks/materias.mock';
import { dadosRecomendacao } from 'mocks/recomendacao.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendacaoSliderService {
  getMaterias() {
    return of(dadosRecomendacao);
  }
}
