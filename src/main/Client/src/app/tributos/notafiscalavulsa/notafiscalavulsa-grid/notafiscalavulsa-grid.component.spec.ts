import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NotaFiscalAvulsaGridComponent } from './notafiscalavulsa-grid.component'; 

describe('NotaFiscalAvulsaGridComponent', () => { 
     let component: NotaFiscalAvulsaGridComponent; 
     let fixture: ComponentFixture<NotaFiscalAvulsaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ NotaFiscalAvulsaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
