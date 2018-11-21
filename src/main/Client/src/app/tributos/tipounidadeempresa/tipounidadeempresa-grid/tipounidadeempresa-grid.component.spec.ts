import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUnidadeEmpresaGridComponent } from './tipounidadeempresa-grid.component'; 

describe('TipoUnidadeEmpresaGridComponent', () => { 
     let component: TipoUnidadeEmpresaGridComponent; 
     let fixture: ComponentFixture<TipoUnidadeEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoUnidadeEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
