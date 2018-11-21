import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FormatoRevistaGridComponent } from './formatorevista-grid.component'; 

describe('FormatoRevistaGridComponent', () => { 
     let component: FormatoRevistaGridComponent; 
     let fixture: ComponentFixture<FormatoRevistaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ FormatoRevistaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
