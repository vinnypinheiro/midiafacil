import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NotaFiscalAvulsaFormComponent } from './notafiscalavulsa-form.component'; 

describe('NotaFiscalAvulsaFormComponent', () => { 
     let component: NotaFiscalAvulsaFormComponent; 
     let fixture: ComponentFixture<NotaFiscalAvulsaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ NotaFiscalAvulsaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(NotaFiscalAvulsaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
