import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { CalcResultsPageRoutingModule } from './calc-results-routing.module';

import { CalcResultsPage } from './calc-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //CalcResultsPageRoutingModule
  ],
  declarations: [CalcResultsPage]
})
export class CalcResultsPageModule {}
