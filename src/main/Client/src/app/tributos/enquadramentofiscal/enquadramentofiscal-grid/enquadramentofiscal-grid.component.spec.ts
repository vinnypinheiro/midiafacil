import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EnquadramentoFiscalGridComponent } from './enquadramentofiscal-grid.component'; 

describe('EnquadramentoFiscalGridComponent', () => { 
     let component: EnquadramentoFiscalGridComponent; 
     let fixture: ComponentFixture<EnquadramentoFiscalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EnquadramentoFiscalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
