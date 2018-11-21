import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TributoGridComponent } from './tributo-grid.component'; 

describe('TributoGridComponent', () => { 
     let component: TributoGridComponent; 
     let fixture: ComponentFixture<TributoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TributoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
