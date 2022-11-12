import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CursoListaComponent } from './curso-lista.component';



@NgModule({
  declarations: [CursoListaComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [CursoListaComponent]
})
export class CursoListaModule { }
