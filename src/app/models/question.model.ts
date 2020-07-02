import {QuestionInput} from './question-input.model';

export class Question{
    id: string;
    text: string;
    description: string;
    type: string;
    min: number;
    max: number;
    hasUnits: boolean;
    unitType: string;
    selectedUnit: string;
    unitChoices: string[];

    constructor(obj: any) {
        this.text = obj.text;
        this.description = obj.description;
        this.type = obj.type;
        this.min = obj.min;
        this.max = obj.max;
    }
}
