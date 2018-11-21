import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CalendarioFiscalFormComponent } from './calendariofiscal-form.component'; 

describe('CalendarioFiscalFormComponent', () => { 
     let component: CalendarioFiscalFormComponent; 
     let fixture: ComponentFixture<CalendarioFiscalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CalendarioFiscalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CalendarioFiscalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
