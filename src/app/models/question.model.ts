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
    unitOptions: Option[];
    value: any;
    options: Option[];
    isRequired: boolean;
    valid: boolean;

    constructor(obj: any) {
        this.text = obj.text;
        this.description = obj.description;
        this.type = obj.type;
        this.min = obj.min;
        this.max = obj.max;
        this.id = obj.id;
        this.value = obj.value;
        this.hasUnits = obj.hasUnits;
        this.unitType = obj.unitType;
        this.selectedUnit = obj.selectedUnit;
        this.unitOptions = obj.unitOptions;
        this.options = obj.options;
        this.isRequired = obj.isRequired;
    }

    validate(): boolean {
        switch(this.type){
            case 'number': {
                return this.valid = (!this.isRequired && !this.value)
                    || (this.value
                    && (!this.hasUnits || (this.selectedUnit && this.unitOptions.some(_ => _.val === this.selectedUnit)))
                    && (!this.min || this.value >= this.min)
                    && (!this.max || this.value <= this.max));
            }
            case 'select': {
                return this.valid = (!this.isRequired && !this.value)
                    || (this.value && this.options?.some(_ => _.val && _.val === this.value));
            }
            case 'toggle': {
                return this.valid = (!this.isRequired && !this.value)
                    || (this.value && (this.value === true || this.value === false));
            }
            default: {

            }
        }
    }
}

export class Option {
    text: string;
    val: string;
}
