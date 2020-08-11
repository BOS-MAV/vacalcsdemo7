import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Question } from '../models/question.model';

export abstract class QuestionInputComponent implements OnInit{
  @Input() model: Question;
  @Output() inputValueChange = new EventEmitter();
  valid: boolean;

  onChange(change: any) {
    this.model.value = change;
    this.inputValueChange.emit({ val: change });
    setTimeout(() => { this.valid = this.model.validate(); }, 2000);
  }

  ngOnInit() {
    this.valid = true;
    if (this.model.type === 'toggle' && !this.model.value) {
      this.model.value = false;
    }
  }
}
