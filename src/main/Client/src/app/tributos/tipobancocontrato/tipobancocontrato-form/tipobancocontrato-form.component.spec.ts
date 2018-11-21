import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoBancoContratoFormComponent } from './tipobancocontrato-form.component'; 

describe('TipoBancoContratoFormComponent', () => { 
     let component: TipoBancoContratoFormComponent; 
     let fixture: ComponentFixture<TipoBancoContratoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoBancoContratoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoBancoContratoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
