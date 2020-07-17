import { Component, Input } from '@angular/core';
import { QuestionInputComponent } from './question-input.component';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputNumberComponent extends QuestionInputComponent {
  @Input() public model: Question;

  validate() {
    return this.model
        && (!this.model.isRequired || this.model.value)
        && (!this.model.min || this.model.value >= this.model.min)
        && (!this.model.max || this.model.value <= this.model.max);
  }
}
