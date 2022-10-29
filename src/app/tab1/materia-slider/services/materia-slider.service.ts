import { Injectable } from '@angular/core';
import { dadosMateria } from 'mocks/materias.mock';
import { of } from 'rxjs';
import { MateriaSliderInterface } from '../interfaces/materia-slider.interface';

@Injectable({
  providedIn: 'root'
})
export class MateriaSliderService {
  getMaterias() {
    return of(dadosMateria);
  }
}
