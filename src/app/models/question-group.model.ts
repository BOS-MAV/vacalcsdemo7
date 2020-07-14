import {Question} from './question.model';

export class QuestionGroup {
    description: string;
    questions: Question[];
    values: any;
    id: string;
    name: string;

    constructor(input: any) {
        this.questions = [];
        this.id = input.id;
        this.description = input.description;
        this.values = input.values;
        this.name = input.name;

        if (input.questions) {
            for (let i = 0; i < input.questions.length; i++) {
                const q = input.questions[i];
                q.id = q.id ? q.id : this.id + '-q' + i;
                this.questions.push(new Question(q));
            }
        }
    }
    validate(): boolean {
        return this.questions.some(_ => !_.validate());
    }
}
