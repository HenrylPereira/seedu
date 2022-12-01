import { dadosCurso } from './../../../../../mocks/cursos.mock';
import { Injectable } from '@angular/core';
import { dadosLogin } from 'mocks/login.mock';
import { of } from 'rxjs';
import { CursoInterface } from '../interfaces/curso-lista.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoGetAllService {
  get(filter?: string) {
    if(filter){
      filter.toLocaleLowerCase();
     return of(dadosCurso.filter((dado) => dado.nome.toLocaleLowerCase().includes(filter)));
    }else{
      return of(dadosCurso);
    }
  }
}
