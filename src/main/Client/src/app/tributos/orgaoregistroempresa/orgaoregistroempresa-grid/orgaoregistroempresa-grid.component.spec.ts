import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OrgaoRegistroEmpresaGridComponent } from './orgaoregistroempresa-grid.component'; 

describe('OrgaoRegistroEmpresaGridComponent', () => { 
     let component: OrgaoRegistroEmpresaGridComponent; 
     let fixture: ComponentFixture<OrgaoRegistroEmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ OrgaoRegistroEmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
