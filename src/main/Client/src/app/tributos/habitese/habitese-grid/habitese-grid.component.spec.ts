import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { HabiteseGridComponent } from './habitese-grid.component'; 

describe('HabiteseGridComponent', () => { 
     let component: HabiteseGridComponent; 
     let fixture: ComponentFixture<HabiteseGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ HabiteseGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
