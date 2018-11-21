import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoStatusGridComponent } from './processoexecucaostatus-grid.component'; 

describe('ProcessoExecucaoStatusGridComponent', () => { 
     let component: ProcessoExecucaoStatusGridComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProcessoExecucaoStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
