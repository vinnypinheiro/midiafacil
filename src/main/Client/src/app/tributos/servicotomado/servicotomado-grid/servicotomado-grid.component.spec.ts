import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ServicoTomadoGridComponent } from './servicotomado-grid.component'; 

describe('ServicoTomadoGridComponent', () => { 
     let component: ServicoTomadoGridComponent; 
     let fixture: ComponentFixture<ServicoTomadoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ServicoTomadoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
