import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenTransporteComponent } from './report-screen-transporte.component';

describe('ReportScreenTransporteComponent', () => {
  let component: ReportScreenTransporteComponent;
  let fixture: ComponentFixture<ReportScreenTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
