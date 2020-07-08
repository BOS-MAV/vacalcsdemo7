import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcResultsPage } from './calc-results.page';

describe('CalcResultsPage', () => {
  let component: CalcResultsPage;
  let fixture: ComponentFixture<CalcResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
