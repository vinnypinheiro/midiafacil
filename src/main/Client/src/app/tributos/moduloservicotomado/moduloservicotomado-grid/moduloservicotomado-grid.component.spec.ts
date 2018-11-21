import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ModuloServicoTomadoGridComponent } from './moduloservicotomado-grid.component'; 

describe('ModuloServicoTomadoGridComponent', () => { 
     let component: ModuloServicoTomadoGridComponent; 
     let fixture: ComponentFixture<ModuloServicoTomadoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ModuloServicoTomadoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
