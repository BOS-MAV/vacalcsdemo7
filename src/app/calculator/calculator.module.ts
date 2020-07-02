import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorRoutingModule } from './calculator-routing.module';

import { CalculatorComponent } from './calculator.component';
import { CalculatorPage } from './calculator.page';
import { QuestionGroupComponent } from '../question-group/question-group.component';
import { QuestionComponent } from '../question/question.component';
import { InputNumberComponent } from '../question-input/input-number.component';
import { InputSelectComponent } from '../question-input/input-select.component';
import { InputToggleComponent } from '../question-input/input-toggle.component';

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
    CalculatorPage,
    InputNumberComponent,
    InputToggleComponent,
    InputSelectComponent
  ]
})
export class CalculatorModule {}
