import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OperadorEmpresaGridComponent } from './operadorempresa-grid.component'; 

describe('OperadorEmpresaGridComponent', () => { 
     let component: OperadorEmpresaGridComponent; 
     let fixture: ComponentFixture<OperadorEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ OperadorEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
