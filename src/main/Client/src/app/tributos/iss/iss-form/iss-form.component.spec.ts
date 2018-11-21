import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { IssFormComponent } from './iss-form.component'; 

describe('IssFormComponent', () => { 
     let component: IssFormComponent; 
     let fixture: ComponentFixture<IssFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ IssFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(IssFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
