import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoParcelamentoTributarioGridComponent } from './tipoparcelamentotributario-grid.component'; 

describe('TipoParcelamentoTributarioGridComponent', () => { 
     let component: TipoParcelamentoTributarioGridComponent; 
     let fixture: ComponentFixture<TipoParcelamentoTributarioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoParcelamentoTributarioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
