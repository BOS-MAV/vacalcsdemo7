import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorRoutingModule } from './calculator-routing.module';

import { CalculatorComponent } from './calculator.component';
import { CalculatorPage } from './calculator.page';
import { QuestionGroupComponent } from '../question-group/question-group.component';
import { QuestionComponent } from '../question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorRoutingModule
  ],
  declarations: [
    CalculatorComponent,
    QuestionGroupComponent,
    QuestionComponent,
    CalculatorPage
  ]
})
export class CalculatorModule {}
