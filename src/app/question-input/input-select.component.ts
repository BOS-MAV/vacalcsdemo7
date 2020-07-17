import { Component, Input } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionInputComponent } from './question-input.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputSelectComponent extends QuestionInputComponent {
  @Input() public model: Question;

  validate() {
    return this.model
        && (!this.model.isRequired || this.model.value)
        && this.model?.options.some(_ => _.val && _.val === this.model.value);
  }
}
