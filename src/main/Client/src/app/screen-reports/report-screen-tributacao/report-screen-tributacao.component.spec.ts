import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenTributacaoComponent } from './report-screen-tributacao.component';

describe('ReportScreenTributacaoComponent', () => {
  let component: ReportScreenTributacaoComponent;
  let fixture: ComponentFixture<ReportScreenTributacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenTributacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenTributacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
