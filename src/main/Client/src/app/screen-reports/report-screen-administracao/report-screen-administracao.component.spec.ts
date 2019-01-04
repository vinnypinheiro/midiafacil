import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenAdministracaoComponent } from './report-screen-administracao.component';

describe('ReportScreenAdministracaoComponent', () => {
  let component: ReportScreenAdministracaoComponent;
  let fixture: ComponentFixture<ReportScreenAdministracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenAdministracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenAdministracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
