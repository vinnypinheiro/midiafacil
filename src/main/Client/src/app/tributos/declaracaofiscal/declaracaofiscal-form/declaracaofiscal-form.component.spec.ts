import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DeclaracaoFiscalFormComponent } from './declaracaofiscal-form.component'; 

describe('DeclaracaoFiscalFormComponent', () => { 
     let component: DeclaracaoFiscalFormComponent; 
     let fixture: ComponentFixture<DeclaracaoFiscalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ DeclaracaoFiscalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(DeclaracaoFiscalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
