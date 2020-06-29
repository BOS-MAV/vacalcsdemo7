import { Component, OnInit, Input } from '@angular/core';
import { QuestionGroupComponent } from '../question-group/question-group.component';
import { Calculator } from '../models/calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorComponent implements OnInit{

  @Input() public model: Calculator;

    ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
