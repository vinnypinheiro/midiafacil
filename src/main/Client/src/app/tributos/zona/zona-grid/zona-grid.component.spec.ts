import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ZonaGridComponent } from './zona-grid.component'; 

describe('ZonaGridComponent', () => { 
     let component: ZonaGridComponent; 
     let fixture: ComponentFixture<ZonaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ZonaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
