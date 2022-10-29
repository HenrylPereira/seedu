import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacaoSliderComponent } from './recomendacao-slider.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RecomendacaoSliderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [RecomendacaoSliderComponent]
})
export class RecomendacaoSliderModule { }
