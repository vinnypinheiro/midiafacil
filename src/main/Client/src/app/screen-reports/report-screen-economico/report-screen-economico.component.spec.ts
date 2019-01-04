import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenEconomicoComponent } from './report-screen-economico.component';

describe('ReportScreenEconomicoComponent', () => {
  let component: ReportScreenEconomicoComponent;
  let fixture: ComponentFixture<ReportScreenEconomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenEconomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
