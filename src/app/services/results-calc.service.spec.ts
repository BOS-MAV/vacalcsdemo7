import { TestBed } from '@angular/core/testing';

import { ResultsCalcService } from './results-calc.service';

describe('ResultsCalcService', () => {
  let service: ResultsCalcService;
  let CalcSpy;

  beforeEach(() => {
    CalcSpy = jasmine.createSpyObj('CalcVals', {
      age:59,
      sex:1,
      race:0,
      smoker:"Current",
      SBP:120,
      diabetes: 0,
      hypertension:1,
      BMI: 40,
      height: 66,
      weight: 280,
      pMI:0,
      aFib:1,
      COPD: 1,
      scr: 0.2,
      pCAD: 1

    });
  service = new ResultsCalcService(CalcSpy,"HF");
  });
  it("should return a non-zero number", () => {
    let finRes:Array<Number> = [];
    finRes = service.calc_results;
    expect(finRes[0]).toBeGreaterThan(0);
  });
});
