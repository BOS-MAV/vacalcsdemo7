import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Calculator } from '../models/calculator.model';
import { QuestionGroup } from '../models/question-group.model';
import { ResultsCalcService } from '../services/results-calc.service';
import { SharedEventService } from '../services/shared-event.service';
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

  constructor(private activatedRoute: ActivatedRoute, private sharedEvents: SharedEventService, private router: Router ) { }

  ngOnInit() {
    this.calculatorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.model = new Calculator(this.getCalculator());
    this.calculatorMode = true;
  }

  private getCalculator() {
    return data.calculators.filter(i => i.id === this.calculatorId).pop();
  }

  onChange(change: QuestionGroup){
    this.model.questionGroups.forEach(_ => _.questions = _.id === change.id ? change.questions : _.questions);
  }

  onBackClick() {
    this.calculatorMode = true;
  }

  onRestartClick() {
    this.router.navigate(['calculator/' + this.calculatorId ]);
  }

  onConfirmClick() {
    if (!this.model.validate()){
      this.sharedEvents.submitClick.next();
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
    const service = new ResultsCalcService(responses, this.model.id);

    this.results = service.calc_results;
    this.calculatorMode = false;
  }
}
