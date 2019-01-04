import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenAuxiliarComponent } from './report-screen-auxiliar.component';

describe('ReportScreenAuxiliarComponent', () => {
  let component: ReportScreenAuxiliarComponent;
  let fixture: ComponentFixture<ReportScreenAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
