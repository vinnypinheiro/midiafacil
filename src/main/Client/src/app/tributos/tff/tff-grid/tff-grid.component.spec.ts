import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TffGridComponent } from './tff-grid.component'; 

describe('TffGridComponent', () => { 
     let component: TffGridComponent; 
     let fixture: ComponentFixture<TffGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TffGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
