import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PrecoPublicoGridComponent } from './precopublico-grid.component'; 

describe('PrecoPublicoGridComponent', () => { 
     let component: PrecoPublicoGridComponent; 
     let fixture: ComponentFixture<PrecoPublicoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PrecoPublicoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
