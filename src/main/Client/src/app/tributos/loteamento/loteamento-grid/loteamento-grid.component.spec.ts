import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LoteamentoGridComponent } from './loteamento-grid.component'; 

describe('LoteamentoGridComponent', () => { 
     let component: LoteamentoGridComponent; 
     let fixture: ComponentFixture<LoteamentoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ LoteamentoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
