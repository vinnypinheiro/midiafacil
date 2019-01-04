import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProgramaGridComponent } from './programa-grid.component'; 

describe('ProgramaGridComponent', () => { 
     let component: ProgramaGridComponent; 
     let fixture: ComponentFixture<ProgramaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProgramaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
