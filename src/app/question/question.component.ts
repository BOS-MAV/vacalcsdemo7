import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Question} from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() public model: Question;
  @Output() questionValueChange = new EventEmitter();

  onChange(change: any) {
    if (change.val) {
      this.model.value = change.val;
    } else if (change.unit) {
      this.model.selectedUnit = change.unit;
    }
    this.questionValueChange.emit(this.model);
  }
}
