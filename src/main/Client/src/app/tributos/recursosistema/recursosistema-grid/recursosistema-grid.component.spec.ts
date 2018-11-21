import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { RecursoSistemaGridComponent } from './recursosistema-grid.component'; 

describe('RecursoSistemaGridComponent', () => { 
     let component: RecursoSistemaGridComponent; 
     let fixture: ComponentFixture<RecursoSistemaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ RecursoSistemaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
