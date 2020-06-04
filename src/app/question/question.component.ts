import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  public questionText: string;

  constructor() {
    this.questionText = 'lorem ipsum';
   }

  ngOnInit() {}

}
