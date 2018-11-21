import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VupTerrenoGridComponent } from './vupterreno-grid.component'; 

describe('VupTerrenoGridComponent', () => { 
     let component: VupTerrenoGridComponent; 
     let fixture: ComponentFixture<VupTerrenoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ VupTerrenoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
