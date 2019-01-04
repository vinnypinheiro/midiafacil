import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenNotafiscalComponent } from './report-screen-notafiscal.component';

describe('ReportScreenNotafiscalComponent', () => {
  let component: ReportScreenNotafiscalComponent;
  let fixture: ComponentFixture<ReportScreenNotafiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenNotafiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenNotafiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
