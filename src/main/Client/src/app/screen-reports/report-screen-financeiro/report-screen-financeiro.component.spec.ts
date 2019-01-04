import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenFinanceiroComponent } from './report-screen-financeiro.component';

describe('ReportScreenFinanceiroComponent', () => {
  let component: ReportScreenFinanceiroComponent;
  let fixture: ComponentFixture<ReportScreenFinanceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenFinanceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
