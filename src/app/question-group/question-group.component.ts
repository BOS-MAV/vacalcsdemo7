import { Component, OnInit, Input } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import {QuestionGroup} from '../models/question-group.model';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent implements OnInit{
  @Input() public model: QuestionGroup;

  ngOnInit() {}
}
