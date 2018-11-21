import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusSimplesNacionalGridComponent } from './statussimplesnacional-grid.component'; 

describe('StatusSimplesNacionalGridComponent', () => { 
     let component: StatusSimplesNacionalGridComponent; 
     let fixture: ComponentFixture<StatusSimplesNacionalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ StatusSimplesNacionalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
