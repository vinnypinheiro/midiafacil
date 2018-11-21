import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoHistoricoFormComponent } from './processoexecucaohistorico-form.component'; 

describe('ProcessoExecucaoHistoricoFormComponent', () => { 
     let component: ProcessoExecucaoHistoricoFormComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoHistoricoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ProcessoExecucaoHistoricoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ProcessoExecucaoHistoricoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
