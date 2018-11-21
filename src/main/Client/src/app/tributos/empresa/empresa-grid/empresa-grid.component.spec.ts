import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmpresaGridComponent } from './empresa-grid.component'; 

describe('EmpresaGridComponent', () => { 
     let component: EmpresaGridComponent; 
     let fixture: ComponentFixture<EmpresaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EmpresaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
