import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoGridComponent } from './processoexecucao-grid.component'; 

describe('ProcessoExecucaoGridComponent', () => { 
     let component: ProcessoExecucaoGridComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProcessoExecucaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
