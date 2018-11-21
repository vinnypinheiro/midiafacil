import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ConcessaoBoxGridComponent } from './concessaobox-grid.component'; 

describe('ConcessaoBoxGridComponent', () => { 
     let component: ConcessaoBoxGridComponent; 
     let fixture: ComponentFixture<ConcessaoBoxGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ConcessaoBoxGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
