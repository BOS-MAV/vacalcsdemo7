import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss'],
})
export class QuestionGroupComponent implements OnInit {
  public questions: QuestionComponent[];

  constructor() { 
    this.questions = [];
  }

  ngOnInit() {}

}
