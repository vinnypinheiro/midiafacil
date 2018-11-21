import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OperadorRecursoGridComponent } from './operadorrecurso-grid.component'; 

describe('OperadorRecursoGridComponent', () => { 
     let component: OperadorRecursoGridComponent; 
     let fixture: ComponentFixture<OperadorRecursoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ OperadorRecursoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
