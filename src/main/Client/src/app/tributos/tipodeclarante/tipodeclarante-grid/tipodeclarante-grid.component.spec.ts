import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDeclaranteGridComponent } from './tipodeclarante-grid.component'; 

describe('TipoDeclaranteGridComponent', () => { 
     let component: TipoDeclaranteGridComponent; 
     let fixture: ComponentFixture<TipoDeclaranteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoDeclaranteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
