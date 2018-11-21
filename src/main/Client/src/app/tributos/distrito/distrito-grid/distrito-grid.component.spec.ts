import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DistritoGridComponent } from './distrito-grid.component'; 

describe('DistritoGridComponent', () => { 
     let component: DistritoGridComponent; 
     let fixture: ComponentFixture<DistritoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DistritoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
