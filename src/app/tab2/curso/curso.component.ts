import { Component, OnInit } from '@angular/core';
import { ModuloGetInterface } from './interfaces/modulo-get.interface';
import { ModuloGetAllService } from './services/modulo-get-all.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  cards$!: ModuloGetInterface[];

  constructor(private moduloGetAllService: ModuloGetAllService) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.moduloGetAllService.getModulos().subscribe((card)=>{
      this.cards$ = card;
    });
  }
}
