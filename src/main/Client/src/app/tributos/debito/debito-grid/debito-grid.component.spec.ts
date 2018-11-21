import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DebitoGridComponent } from './debito-grid.component'; 

describe('DebitoGridComponent', () => { 
     let component: DebitoGridComponent; 
     let fixture: ComponentFixture<DebitoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DebitoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
