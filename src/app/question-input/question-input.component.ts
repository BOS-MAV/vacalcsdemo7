import { Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question.model';
// import { FormsModule } from '@angular/forms';

export abstract class QuestionInputComponent{
  @Input() model: Question;
  @Output() inputValueChange = new EventEmitter();
  valid: boolean;

  abstract validate(): boolean;

  onChange(change: any) {
    this.model.value = change;
    this.inputValueChange.emit(change);
    this.valid = this.validate();

    // TODO [MM]: We don't want to validate immediately, because it's obnoxious to mark a field red while the user's still typing
    //            The text below doesn't resolve in the current frame, however
    // setTimeout(this.validate, 2500);
  }
}
