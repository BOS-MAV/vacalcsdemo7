import {ResultsGroup} from './results-group.model';

export class Results{
    name: string;
    description: string;
    resultsGroups: ResultsGroup[];

    constructor(input: any) {
        this.resultsGroups = [];
        this.name = input.name;
        this.description = input.description;
        if (input.resultsGroups) {
            for (let q of input.resultsGroups) {
                this.resultsGroups.push(new ResultsGroup(q));
            }
        }
    }
}
