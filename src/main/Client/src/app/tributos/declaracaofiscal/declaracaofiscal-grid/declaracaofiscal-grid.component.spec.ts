import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DeclaracaoFiscalGridComponent } from './declaracaofiscal-grid.component'; 

describe('DeclaracaoFiscalGridComponent', () => { 
     let component: DeclaracaoFiscalGridComponent; 
     let fixture: ComponentFixture<DeclaracaoFiscalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DeclaracaoFiscalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
