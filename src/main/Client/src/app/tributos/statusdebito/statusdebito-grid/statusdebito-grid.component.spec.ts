import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusDebitoGridComponent } from './statusdebito-grid.component'; 

describe('StatusDebitoGridComponent', () => { 
     let component: StatusDebitoGridComponent; 
     let fixture: ComponentFixture<StatusDebitoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ StatusDebitoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
