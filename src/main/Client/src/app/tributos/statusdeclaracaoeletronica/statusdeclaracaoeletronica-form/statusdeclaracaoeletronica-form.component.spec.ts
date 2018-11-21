import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusDeclaracaoEletronicaFormComponent } from './statusdeclaracaoeletronica-form.component'; 

describe('StatusDeclaracaoEletronicaFormComponent', () => { 
     let component: StatusDeclaracaoEletronicaFormComponent; 
     let fixture: ComponentFixture<StatusDeclaracaoEletronicaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ StatusDeclaracaoEletronicaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(StatusDeclaracaoEletronicaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
