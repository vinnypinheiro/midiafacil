import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUnidadeGridComponent } from './tipounidade-grid.component'; 

describe('TipoUnidadeGridComponent', () => { 
     let component: TipoUnidadeGridComponent; 
     let fixture: ComponentFixture<TipoUnidadeGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoUnidadeGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
