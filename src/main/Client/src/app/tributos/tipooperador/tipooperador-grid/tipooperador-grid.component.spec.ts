import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoOperadorGridComponent } from './tipooperador-grid.component'; 

describe('TipoOperadorGridComponent', () => { 
     let component: TipoOperadorGridComponent; 
     let fixture: ComponentFixture<TipoOperadorGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoOperadorGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
