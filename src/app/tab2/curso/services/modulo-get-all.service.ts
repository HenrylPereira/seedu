import { Injectable } from '@angular/core';
import { dadosmodulo } from 'mocks/curso.mock';
import { dadosMateria } from 'mocks/materias.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuloGetAllService {
  getModulos() {
    return of(dadosmodulo);
  }
}
