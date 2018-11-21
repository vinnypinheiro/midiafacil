import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FundamentacaoLegalFormComponent } from './fundamentacaolegal-form.component'; 

describe('FundamentacaoLegalFormComponent', () => { 
     let component: FundamentacaoLegalFormComponent; 
     let fixture: ComponentFixture<FundamentacaoLegalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ FundamentacaoLegalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(FundamentacaoLegalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
