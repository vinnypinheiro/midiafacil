import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusDebitoFormComponent } from './statusdebito-form.component'; 

describe('StatusDebitoFormComponent', () => { 
     let component: StatusDebitoFormComponent; 
     let fixture: ComponentFixture<StatusDebitoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ StatusDebitoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(StatusDebitoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
