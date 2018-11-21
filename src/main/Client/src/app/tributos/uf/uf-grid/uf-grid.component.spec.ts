import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { UfGridComponent } from './uf-grid.component'; 

describe('UfGridComponent', () => { 
     let component: UfGridComponent; 
     let fixture: ComponentFixture<UfGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ UfGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
