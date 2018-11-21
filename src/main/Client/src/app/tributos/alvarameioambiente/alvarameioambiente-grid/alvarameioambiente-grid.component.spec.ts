import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraMeioAmbienteGridComponent } from './alvarameioambiente-grid.component'; 

describe('AlvaraMeioAmbienteGridComponent', () => { 
     let component: AlvaraMeioAmbienteGridComponent; 
     let fixture: ComponentFixture<AlvaraMeioAmbienteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ AlvaraMeioAmbienteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
