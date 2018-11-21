import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoBaixaGridComponent } from './tipobaixa-grid.component'; 

describe('TipoBaixaGridComponent', () => { 
     let component: TipoBaixaGridComponent; 
     let fixture: ComponentFixture<TipoBaixaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoBaixaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
