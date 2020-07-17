import { Component, Output, Input, EventEmitter } from '@angular/core';
import {QuestionGroup} from '../models/question-group.model';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent {
  @Input() public model: QuestionGroup;
  @Output() questionGroupValueChange = new EventEmitter();

  onChange(change: Question) {
    this.model.questions.forEach(_ => _ = _.id === change.id ? change : _);
    this.questionGroupValueChange.emit(this.model);
  }
}
