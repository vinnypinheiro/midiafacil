import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MailPiFormComponent } from './mailpi-form.component'; 

describe('MailPiFormComponent', () => { 
     let component: MailPiFormComponent; 
     let fixture: ComponentFixture<MailPiFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ MailPiFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(MailPiFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
