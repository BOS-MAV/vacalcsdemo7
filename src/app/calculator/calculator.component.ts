import { Component, OnInit } from '@angular/core';
import { QuestionGroupComponent } from '../question-group/question-group.component';
import { Calculator } from '../models/calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit{

  public model: Calculator;

  ngOnInit() {}

}
