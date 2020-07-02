import { OnInit } from '@angular/core';
import { QuestionInput } from '../models/question-input.model';

export interface QuestionInputComponent extends OnInit {
  model: QuestionInput;
}
