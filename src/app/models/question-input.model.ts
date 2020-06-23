import {Deserializable} from './deserializable.model';

export class QuestionInput implements Deserializable {
    description: string;
    type: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
