import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() public model: Question;

  ngOnInit() {}

}
