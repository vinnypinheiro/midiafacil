import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoImovelGridComponent } from './tipoimovel-grid.component'; 

describe('TipoImovelGridComponent', () => { 
     let component: TipoImovelGridComponent; 
     let fixture: ComponentFixture<TipoImovelGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoImovelGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
