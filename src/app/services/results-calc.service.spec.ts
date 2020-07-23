import { TestBed } from '@angular/core/testing';

import { ResultsCalcService } from './results-calc.service';

describe('ResultsCalcService', () => {

  /*let CalcSpy;
*/
  beforeEach(() => {
  
   console.log("XXX");

    });
    

  });
  it("should return a non-zero number HF", () => {
    let CalcVal = new Object();
    CalcVal= {"age":59,"sex":"Male","race":"White","smoker":"Current","SBP":120,"diabetes":false,
    "hypertension":true,"BMI":40,"height":66,"weight":280,"pMI":false,"aFib":true,"COPD":true,"scr":0.2,"pCAD":true};
    let service = new ResultsCalcService(CalcVal,"HF");
    let finRes:Array<Number> = [];
    finRes = service.calc_results;
    expect(finRes[0]).toBeGreaterThan(0);
  });

  it("should return a non-zero number ASCVD", () => {
    let CalcVal1 = new Object();
    CalcVal1= {"age":59,"sex":"Male","race":"White","smoker":"Ever","SBP":120,"diabetes":false,
    "hypertension":true,"BMI":40,"height":66,"weight":280,"pMI":false,"aFib":true,"COPD":true,"scr":0.2,"pCAD":true,"statin":true,"DBP":80,"totchl":120,"hdl":120,"ldl":260};
    let service = new ResultsCalcService(CalcVal1,"ASCVD");
    console.log("LLL");
    let finRes:Array<Number> = [];
    finRes = service.calc_results;
    expect(finRes[0]).toBeGreaterThan(0);
  });

  it("should return a non-zero number ASCVD_Diab", () => {
    let CalcVal2 = new Object();
    CalcVal2= {"age":59,"sex":"Male","race":"White","smoker":"Ever","SBP":120,"diabetes":false,"otherDiab":1,
    "hypertension":true,"BMI":40,"height":66,"weight":280,"pMI":false,"aFib":true,"COPD":true,"scr":0.2,"pCAD":true,"statin":true,"DBP":80,"totchl":120,"hdl":120,"ldl":260,
    "sulfonyl":0.1,"insulin":80,"egfr":0.1,"bpmed":true};
    let service = new ResultsCalcService(CalcVal2,"ASCVD_Diab");
    let finRes:Array<Number> = [];
    finRes = service.calc_results;
    expect(finRes[0]).toBeGreaterThan(0);
  });
