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
    // changes.prop contains the old and the new value...
    this.model.value = change;
    const field = {
      id: this.model.id,
      val: this.model.hasUnits ? change + ':' + this.model.selectedUnit : change
    };
    this.questionValueChange.emit(field);
  }
}