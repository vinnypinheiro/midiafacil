import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioGridComponent } from './creditobancario-grid.component'; 

describe('CreditoBancarioGridComponent', () => { 
     let component: CreditoBancarioGridComponent; 
     let fixture: ComponentFixture<CreditoBancarioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CreditoBancarioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
