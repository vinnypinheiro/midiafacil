import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OperadorGridComponent } from './operador-grid.component'; 

describe('OperadorGridComponent', () => { 
     let component: OperadorGridComponent; 
     let fixture: ComponentFixture<OperadorGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ OperadorGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
