import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EnquadramentoFiscalFormComponent } from './enquadramentofiscal-form.component'; 

describe('EnquadramentoFiscalFormComponent', () => { 
     let component: EnquadramentoFiscalFormComponent; 
     let fixture: ComponentFixture<EnquadramentoFiscalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ EnquadramentoFiscalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(EnquadramentoFiscalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
