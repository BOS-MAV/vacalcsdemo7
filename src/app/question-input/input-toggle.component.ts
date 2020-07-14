import { Component, Input } from '@angular/core';
import { QuestionInputComponent } from './question-input.component';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-input-toggle',
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputToggleComponent extends QuestionInputComponent {
  @Input() public model: Question;
}