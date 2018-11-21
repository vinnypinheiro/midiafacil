import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusNotaFiscalFormComponent } from './statusnotafiscal-form.component'; 

describe('StatusNotaFiscalFormComponent', () => { 
     let component: StatusNotaFiscalFormComponent; 
     let fixture: ComponentFixture<StatusNotaFiscalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ StatusNotaFiscalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(StatusNotaFiscalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
