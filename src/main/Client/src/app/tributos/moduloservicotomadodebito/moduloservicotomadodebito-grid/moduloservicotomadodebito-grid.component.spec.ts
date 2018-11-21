import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ModuloServicoTomadoDebitoGridComponent } from './moduloservicotomadodebito-grid.component'; 

describe('ModuloServicoTomadoDebitoGridComponent', () => { 
     let component: ModuloServicoTomadoDebitoGridComponent; 
     let fixture: ComponentFixture<ModuloServicoTomadoDebitoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ModuloServicoTomadoDebitoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
