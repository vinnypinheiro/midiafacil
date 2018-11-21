import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CartorioGridComponent } from './cartorio-grid.component'; 

describe('CartorioGridComponent', () => { 
     let component: CartorioGridComponent; 
     let fixture: ComponentFixture<CartorioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CartorioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
