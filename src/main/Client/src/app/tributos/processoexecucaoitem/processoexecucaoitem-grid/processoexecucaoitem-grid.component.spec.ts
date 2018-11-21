import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoItemGridComponent } from './processoexecucaoitem-grid.component'; 

describe('ProcessoExecucaoItemGridComponent', () => { 
     let component: ProcessoExecucaoItemGridComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProcessoExecucaoItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
