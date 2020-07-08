import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcResultsPage } from './calc-results.page';

const routes: Routes = [
  {
    path: '',
    component: CalcResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcResultsPageRoutingModule {}
