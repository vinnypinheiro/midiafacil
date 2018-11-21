import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ConcessaoGridComponent } from './concessao-grid.component'; 

describe('ConcessaoGridComponent', () => { 
     let component: ConcessaoGridComponent; 
     let fixture: ComponentFixture<ConcessaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ConcessaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
