import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SimplesNacionalGridComponent } from './simplesnacional-grid.component'; 

describe('SimplesNacionalGridComponent', () => { 
     let component: SimplesNacionalGridComponent; 
     let fixture: ComponentFixture<SimplesNacionalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ SimplesNacionalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
