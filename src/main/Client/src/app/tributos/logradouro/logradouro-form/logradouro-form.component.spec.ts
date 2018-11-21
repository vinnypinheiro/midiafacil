import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LogradouroFormComponent } from './logradouro-form.component'; 

describe('LogradouroFormComponent', () => { 
     let component: LogradouroFormComponent; 
     let fixture: ComponentFixture<LogradouroFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ LogradouroFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(LogradouroFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
