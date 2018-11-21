import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioItemGridComponent } from './creditobancarioitem-grid.component'; 

describe('CreditoBancarioItemGridComponent', () => { 
     let component: CreditoBancarioItemGridComponent; 
     let fixture: ComponentFixture<CreditoBancarioItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CreditoBancarioItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
