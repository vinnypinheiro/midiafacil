import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ItivGridComponent } from './itiv-grid.component'; 

describe('ItivGridComponent', () => { 
     let component: ItivGridComponent; 
     let fixture: ComponentFixture<ItivGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ItivGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
