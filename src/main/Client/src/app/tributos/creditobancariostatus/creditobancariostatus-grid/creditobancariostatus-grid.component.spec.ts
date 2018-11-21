import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioStatusGridComponent } from './creditobancariostatus-grid.component'; 

describe('CreditoBancarioStatusGridComponent', () => { 
     let component: CreditoBancarioStatusGridComponent; 
     let fixture: ComponentFixture<CreditoBancarioStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CreditoBancarioStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
