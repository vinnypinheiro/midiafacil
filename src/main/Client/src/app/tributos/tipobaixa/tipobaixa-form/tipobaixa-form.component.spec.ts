import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoBaixaFormComponent } from './tipobaixa-form.component'; 

describe('TipoBaixaFormComponent', () => { 
     let component: TipoBaixaFormComponent; 
     let fixture: ComponentFixture<TipoBaixaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoBaixaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoBaixaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
