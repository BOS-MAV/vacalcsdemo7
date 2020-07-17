import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calculator } from '../models/calculator.model';
import { QuestionGroup } from '../models/question-group.model';
import * as data from '../calculators-data.json';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  public calculatorId: string;
  public model: Calculator;
  public calculatorMode: boolean;
  public results: number[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.calculatorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.model = new Calculator(this.getCalculator());
    this.calculatorMode = true;
  }

  private getCalculator(){
    return data.calculators.filter(i => i.id === this.calculatorId).pop();
  }

  onChange(change: QuestionGroup){
    this.model.questionGroups.forEach(_ => _.questions = _.id === change.id ? change.questions : _.questions);
  }

  onConfirmClick(){
    if (!this.model.validate()){
      return;
    }
    const responses = {};
    for (const qg of this.model.questionGroups) {
      for (const q of qg.questions){
        if (q.value){
          responses[q.id] = q.hasUnits ? q.value + ':' + q.selectedUnit : q.value;
        }
      }
    }
    // call service(calcName, responses)
    this.results = [5, 10, 15];
    this.calculatorMode = false;

  }
}
