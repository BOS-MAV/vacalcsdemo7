import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calculator } from '../models/calculator.model';
import * as data from '../calculators-data.json';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  public calculatorId: string;
  public calcModel: Calculator;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.calculatorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.calcModel = new Calculator(this.getCalculator());
  }

  private getCalculator(){
    return data.calculators.filter(i => i.id === this.calculatorId).pop();
  }

}
