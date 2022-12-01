import { CursoGetAllService } from './services/curso-get-all.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss'],
})
export class CursoListaComponent implements OnInit {
  cursos$: any;

  constructor(private cursoGetAllService: CursoGetAllService) { }

  ngOnInit() {
    this.pesquisar();
  }

  public pesquisar(event?){

    if(event){
      this.cursoGetAllService.get(event.detail.value).subscribe((curso)=>{
        this.cursos$ = curso;
      });
    }else{
      this.cursoGetAllService.get().subscribe((curso)=>{
        this.cursos$ = curso;
      });
    }
  }
}
