import { Component, Input } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionInputComponent } from './question-input.component';
import { SharedEventService } from '../services/shared-event.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputSelectComponent extends QuestionInputComponent {
  @Input() public model: Question;

  constructor(sharedEvents: SharedEventService) {
    super();
    sharedEvents.submitClick.subscribe(() => { this.valid = this.model.validate(); });
  }
}
