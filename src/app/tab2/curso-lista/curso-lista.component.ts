import { CursoGetAllService } from './services/curso-get-all.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss'],
})
export class CursoListaComponent implements OnInit {
  cursos$: any;

  constructor(private cursoGetAllService: CursoGetAllService, private router: Router) { }

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

  public abrirCurso(id: string){
    this.router.navigate(['app/cursos/curso']);
  }
}
