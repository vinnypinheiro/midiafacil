import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoConstituicaoEmpresaGridComponent } from './tipoconstituicaoempresa-grid.component'; 

describe('TipoConstituicaoEmpresaGridComponent', () => { 
     let component: TipoConstituicaoEmpresaGridComponent; 
     let fixture: ComponentFixture<TipoConstituicaoEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoConstituicaoEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
