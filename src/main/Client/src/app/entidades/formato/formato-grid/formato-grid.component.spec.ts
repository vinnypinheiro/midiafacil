import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FormatoGridComponent } from './formato-grid.component'; 

describe('FormatoGridComponent', () => { 
     let component: FormatoGridComponent; 
     let fixture: ComponentFixture<FormatoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ FormatoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
