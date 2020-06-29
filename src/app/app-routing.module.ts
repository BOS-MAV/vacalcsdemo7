import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'calculator/:id',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorModule)
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'landing', component: LandingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
