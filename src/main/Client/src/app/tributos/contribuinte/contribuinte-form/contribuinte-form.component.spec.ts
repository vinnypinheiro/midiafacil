import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ContribuinteFormComponent } from './contribuinte-form.component'; 

describe('ContribuinteFormComponent', () => { 
     let component: ContribuinteFormComponent; 
     let fixture: ComponentFixture<ContribuinteFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ContribuinteFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ContribuinteFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
