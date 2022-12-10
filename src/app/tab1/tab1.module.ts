import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RecomendacaoSliderModule } from './recomendacao-slider/recomendacao-slider.module';
import { MateriaSliderModule } from './materia-slider/materia-slider.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    MateriaSliderModule,
    RecomendacaoSliderModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
