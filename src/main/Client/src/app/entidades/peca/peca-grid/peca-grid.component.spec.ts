import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PecaGridComponent } from './peca-grid.component'; 

describe('PecaGridComponent', () => { 
     let component: PecaGridComponent; 
     let fixture: ComponentFixture<PecaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PecaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
