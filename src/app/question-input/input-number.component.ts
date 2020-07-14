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
}
