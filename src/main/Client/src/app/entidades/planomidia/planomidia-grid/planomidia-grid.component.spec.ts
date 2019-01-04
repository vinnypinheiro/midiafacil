import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PlanoMidiaGridComponent } from './planomidia-grid.component'; 

describe('PlanoMidiaGridComponent', () => { 
     let component: PlanoMidiaGridComponent; 
     let fixture: ComponentFixture<PlanoMidiaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PlanoMidiaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
