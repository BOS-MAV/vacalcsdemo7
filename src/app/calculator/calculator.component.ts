import { Component, Input } from '@angular/core';
import { Calculator } from '../models/calculator.model';
import { QuestionGroup } from '../models/question-group.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorComponent {

  @Input() public model: Calculator;

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
          responses[q.id] = q.value;
        }
      }
    }
    // call service(calcName, responses)
    const results = 15;
  }
}
