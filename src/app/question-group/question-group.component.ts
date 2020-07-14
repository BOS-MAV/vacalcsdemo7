import { Component, Output, Input, EventEmitter } from '@angular/core';
import {QuestionGroup} from '../models/question-group.model';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent {
  @Input() public model: QuestionGroup;
  @Output() questionGroupValueChange = new EventEmitter();

  onChange(change: any) {
    this.model.questions.forEach(_ => _.value = _.id === change.id ? change.val : _.value);
    this.questionGroupValueChange.emit(this.model);
  }
}
