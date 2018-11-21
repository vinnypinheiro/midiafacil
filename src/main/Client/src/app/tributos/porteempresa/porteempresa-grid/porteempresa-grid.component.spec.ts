import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PorteEmpresaGridComponent } from './porteempresa-grid.component'; 

describe('PorteEmpresaGridComponent', () => { 
     let component: PorteEmpresaGridComponent; 
     let fixture: ComponentFixture<PorteEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PorteEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
