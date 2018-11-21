import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PlanoMidiaInsersaoItemGridComponent } from './planomidiainsersaoitem-grid.component'; 

describe('PlanoMidiaInsersaoItemGridComponent', () => { 
     let component: PlanoMidiaInsersaoItemGridComponent; 
     let fixture: ComponentFixture<PlanoMidiaInsersaoItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PlanoMidiaInsersaoItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
