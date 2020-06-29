import {QuestionGroup} from './question-group.model';

export class Calculator{
    name: string;
    description: string;
    calcFunction: string;
    questionGroups: QuestionGroup[];

    constructor(input: any) {
        this.questionGroups = [];
        this.name = input.name;
        this.description = input.description;
        this.calcFunction = input.calcFunction;
        if (input.questionGroups) {
            for (let q of input.questionGroups) {
                this.questionGroups.push(new QuestionGroup(q));
            }
        }
    }
}
