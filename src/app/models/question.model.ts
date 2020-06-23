import {QuestionInput} from './question-input.model';

export class Question{
    text: string;
    description: string;
    type: string;
    min: number;
    max: number;

    constructor(obj: any) {
        this.text = obj.text;
        this.description = obj.description;
        this.type = obj.type;
        this.min = obj.min;
        this.max = obj.max;
    }
}
