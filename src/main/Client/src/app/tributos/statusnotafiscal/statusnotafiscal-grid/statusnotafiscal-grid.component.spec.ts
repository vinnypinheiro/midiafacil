import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusNotaFiscalGridComponent } from './statusnotafiscal-grid.component'; 

describe('StatusNotaFiscalGridComponent', () => { 
     let component: StatusNotaFiscalGridComponent; 
     let fixture: ComponentFixture<StatusNotaFiscalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ StatusNotaFiscalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
