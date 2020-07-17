import { Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question.model';
// import { FormsModule } from '@angular/forms';

export abstract class QuestionInputComponent{
  @Input() model: Question;
  @Output() inputValueChange = new EventEmitter();
  valid: boolean;

  onChange(change: any) {
    this.model.value = change;
    this.inputValueChange.emit({ val: change });
    setTimeout(() => { this.model.validate(); }, 3000);
  }
}
