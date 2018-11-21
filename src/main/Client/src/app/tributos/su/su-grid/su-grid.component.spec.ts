import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SuGridComponent } from './su-grid.component'; 

describe('SuGridComponent', () => { 
     let component: SuGridComponent; 
     let fixture: ComponentFixture<SuGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ SuGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
