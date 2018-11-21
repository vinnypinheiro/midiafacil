import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DebitoParcelaGridComponent } from './debitoparcela-grid.component'; 

describe('DebitoParcelaGridComponent', () => { 
     let component: DebitoParcelaGridComponent; 
     let fixture: ComponentFixture<DebitoParcelaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DebitoParcelaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
