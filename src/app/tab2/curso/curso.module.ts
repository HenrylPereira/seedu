import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ CursoComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ CursoComponent ]
})
export class CursoModule { }
