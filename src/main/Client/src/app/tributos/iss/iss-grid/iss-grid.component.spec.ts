import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { IssGridComponent } from './iss-grid.component'; 

describe('IssGridComponent', () => { 
     let component: IssGridComponent; 
     let fixture: ComponentFixture<IssGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ IssGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
