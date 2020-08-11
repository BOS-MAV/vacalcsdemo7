import { Component, Input } from '@angular/core';
import { QuestionInputComponent } from './question-input.component';
import { Question } from '../models/question.model';
import { SharedEventService } from '../services/shared-event.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./question-input.component.scss'],
})
export class InputNumberComponent extends QuestionInputComponent {
  @Input() public model: Question;

  constructor(sharedEvents: SharedEventService) {
    super();
    sharedEvents.submitClick.subscribe(() => { this.valid = this.model.validate(); });
  }

  onUnitChange(newUnit: string) {
    this.model.selectedUnit = newUnit;
    this.inputValueChange.emit({ unit: newUnit });
  }
}
