import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoBancoContratoGridComponent } from './tipobancocontrato-grid.component'; 

describe('TipoBancoContratoGridComponent', () => { 
     let component: TipoBancoContratoGridComponent; 
     let fixture: ComponentFixture<TipoBancoContratoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoBancoContratoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
