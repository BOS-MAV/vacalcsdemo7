import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorPage } from './calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPage
  },  {
    path: 'calc-results',
    loadChildren: () => import('./calc-results/calc-results.module').then( m => m.CalcResultsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorRoutingModule {}
