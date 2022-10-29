import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaSliderComponent } from './materia-slider.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MateriaSliderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [MateriaSliderComponent]
})
export class MateriaSliderModule { }
