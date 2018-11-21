import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcessoExecucaoItemFormComponent } from './processoexecucaoitem-form.component'; 

describe('ProcessoExecucaoItemFormComponent', () => { 
     let component: ProcessoExecucaoItemFormComponent; 
     let fixture: ComponentFixture<ProcessoExecucaoItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ProcessoExecucaoItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ProcessoExecucaoItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
