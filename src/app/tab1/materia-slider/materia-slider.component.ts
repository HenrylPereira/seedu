import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MateriaSliderInterface, MateriaSlidersInterface } from './interfaces/materia-slider.interface';
import { MateriaSliderService } from './services/materia-slider.service';

@Component({
  selector: 'app-materia-slider',
  templateUrl: './materia-slider.component.html',
  styleUrls: ['./materia-slider.component.scss'],
})
export class MateriaSliderComponent implements OnInit {

  cards$!: MateriaSliderInterface[];

  constructor(private materialSliderService: MateriaSliderService, private router: Router) { }

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.materialSliderService.getMaterias().subscribe((card)=>{
      this.cards$ = card;
    });
  }

  public abrirCurso(id: string){
    this.router.navigate(['app/cursos/curso']);
  }
}
