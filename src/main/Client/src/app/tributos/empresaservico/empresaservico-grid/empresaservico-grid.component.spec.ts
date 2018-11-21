import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmpresaServicoGridComponent } from './empresaservico-grid.component'; 

describe('EmpresaServicoGridComponent', () => { 
     let component: EmpresaServicoGridComponent; 
     let fixture: ComponentFixture<EmpresaServicoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EmpresaServicoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
