import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoHistoricoGridComponent } from './processoexecucaohistorico-grid.component'; 

describe('ProcessoExecucaoHistoricoGridComponent', () => { 
     let component: ProcessoExecucaoHistoricoGridComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoHistoricoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProcessoExecucaoHistoricoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
