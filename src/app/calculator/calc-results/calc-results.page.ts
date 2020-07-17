import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calc-results.page.html',
  styleUrls: ['./calc-results.page.scss'],
})
export class CalculatorResultsPage {
  @Input() public results: number[];

  constructor() { }
}
