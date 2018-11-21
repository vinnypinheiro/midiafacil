import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FaturamentoPadraoGridComponent } from './faturamentopadrao-grid.component'; 

describe('FaturamentoPadraoGridComponent', () => { 
     let component: FaturamentoPadraoGridComponent; 
     let fixture: ComponentFixture<FaturamentoPadraoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ FaturamentoPadraoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
