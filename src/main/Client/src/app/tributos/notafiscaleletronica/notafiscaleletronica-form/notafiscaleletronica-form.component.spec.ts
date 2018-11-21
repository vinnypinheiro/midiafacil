import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NotaFiscalEletronicaFormComponent } from './notafiscaleletronica-form.component'; 

describe('NotaFiscalEletronicaFormComponent', () => { 
     let component: NotaFiscalEletronicaFormComponent; 
     let fixture: ComponentFixture<NotaFiscalEletronicaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ NotaFiscalEletronicaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(NotaFiscalEletronicaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
