import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ContribuinteGridComponent } from './contribuinte-grid.component'; 

describe('ContribuinteGridComponent', () => { 
     let component: ContribuinteGridComponent; 
     let fixture: ComponentFixture<ContribuinteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ContribuinteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
