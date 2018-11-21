import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PlanoMidiaInsersaoGridComponent } from './planomidiainsersao-grid.component'; 

describe('PlanoMidiaInsersaoGridComponent', () => { 
     let component: PlanoMidiaInsersaoGridComponent; 
     let fixture: ComponentFixture<PlanoMidiaInsersaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PlanoMidiaInsersaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
