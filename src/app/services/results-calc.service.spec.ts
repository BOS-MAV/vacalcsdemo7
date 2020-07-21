import { TestBed } from '@angular/core/testing';

import { ResultsCalcService } from './results-calc.service';

describe('ResultsCalcService', () => {

  /*let CalcSpy;
*/
  beforeEach(() => {
  
   console.log("XXX");

    });
    

  });
  it("should return a non-zero number", () => {
    let CalcVal = new Object();
    CalcVal= {"age":59,"sex":"Male","race":"White","smoker":"Current","SBP":120,"diabetes":false,
    "hypertension":true,"BMI":40,"height":66,"weight":280,"pMI":false,"aFib":true,"COPD":true,"scr":0.2,"pCAD":true};
    let service = new ResultsCalcService(CalcVal,"HF");
    let finRes:Array<Number> = [];
    finRes = service.calc_results;
    expect(finRes[0]).toBeGreaterThan(0);
  });
