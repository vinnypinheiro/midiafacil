import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScreenUrbanismoComponent } from './report-screen-urbanismo.component';

describe('ReportScreenUrbanismoComponent', () => {
  let component: ReportScreenUrbanismoComponent;
  let fixture: ComponentFixture<ReportScreenUrbanismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportScreenUrbanismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportScreenUrbanismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
