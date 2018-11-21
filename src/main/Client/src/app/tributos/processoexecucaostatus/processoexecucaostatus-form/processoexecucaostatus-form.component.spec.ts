import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoStatusFormComponent } from './processoexecucaostatus-form.component'; 

describe('ProcessoExecucaoStatusFormComponent', () => { 
     let component: ProcessoExecucaoStatusFormComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ProcessoExecucaoStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ProcessoExecucaoStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
