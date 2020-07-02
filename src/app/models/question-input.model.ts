import {Deserializable} from './deserializable.model';

export class QuestionInput implements Deserializable {
    description: string;
    type: string;
    id: string;
    text: string;
    min: number;
    max: number;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
