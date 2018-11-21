import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FaturamentoPadraoFormComponent } from './faturamentopadrao-form.component'; 

describe('FaturamentoPadraoFormComponent', () => { 
     let component: FaturamentoPadraoFormComponent; 
     let fixture: ComponentFixture<FaturamentoPadraoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ FaturamentoPadraoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(FaturamentoPadraoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
