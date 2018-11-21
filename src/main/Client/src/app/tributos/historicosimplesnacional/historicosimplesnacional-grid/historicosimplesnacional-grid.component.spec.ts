import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { HistoricoSimplesNacionalGridComponent } from './historicosimplesnacional-grid.component'; 

describe('HistoricoSimplesNacionalGridComponent', () => { 
     let component: HistoricoSimplesNacionalGridComponent; 
     let fixture: ComponentFixture<HistoricoSimplesNacionalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ HistoricoSimplesNacionalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
