import { Component, Input } from '@angular/core';
import { QuestionInputComponent } from './question-input.component';
import { QuestionInput } from '../models/question-input.model';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputNumberComponent implements QuestionInputComponent {
  @Input() public model: QuestionInput;

  ngOnInit() {}

}
