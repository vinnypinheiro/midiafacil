import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoFormComponent } from './processoexecucao-form.component'; 

describe('ProcessoExecucaoFormComponent', () => { 
     let component: ProcessoExecucaoFormComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ProcessoExecucaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ProcessoExecucaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
