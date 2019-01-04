import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PaisGridComponent } from './pais-grid.component'; 

describe('PaisGridComponent', () => { 
     let component: PaisGridComponent; 
     let fixture: ComponentFixture<PaisGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PaisGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
