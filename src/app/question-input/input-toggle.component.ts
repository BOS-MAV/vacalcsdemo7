import { Component, Input } from '@angular/core';
import { QuestionInputComponent } from './question-input.component';
import { QuestionInput } from '../models/question-input.model';

@Component({
  selector: 'app-input-toggle',
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputToggleComponent implements QuestionInputComponent {
  @Input() public model: QuestionInput;

  ngOnInit() {}

}
