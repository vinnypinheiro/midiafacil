import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaOperacaoEmpresaGridComponent } from './naturezaoperacaoempresa-grid.component'; 

describe('NaturezaOperacaoEmpresaGridComponent', () => { 
     let component: NaturezaOperacaoEmpresaGridComponent; 
     let fixture: ComponentFixture<NaturezaOperacaoEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ NaturezaOperacaoEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
