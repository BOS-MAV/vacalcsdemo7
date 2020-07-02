import { Component, Input } from '@angular/core';
import { QuestionInput } from '../models/question-input.model';
import { QuestionInputComponent } from './question-input.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputSelectComponent implements QuestionInputComponent {
  @Input() public model: QuestionInput;

  constructor() { }

  ngOnInit() {}

}