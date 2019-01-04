import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenProcuradoriaComponent } from './report-screen-procuradoria.component';

describe('ReportScreenProcuradoriaComponent', () => {
  let component: ReportScreenProcuradoriaComponent;
  let fixture: ComponentFixture<ReportScreenProcuradoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenProcuradoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenProcuradoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
