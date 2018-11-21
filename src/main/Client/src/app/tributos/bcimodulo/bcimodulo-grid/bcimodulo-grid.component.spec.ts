import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciModuloGridComponent } from './bcimodulo-grid.component'; 

describe('BciModuloGridComponent', () => { 
     let component: BciModuloGridComponent; 
     let fixture: ComponentFixture<BciModuloGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BciModuloGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
