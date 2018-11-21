import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ConcessaoBoxFormComponent } from './concessaobox-form.component'; 

describe('ConcessaoBoxFormComponent', () => { 
     let component: ConcessaoBoxFormComponent; 
     let fixture: ComponentFixture<ConcessaoBoxFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ConcessaoBoxFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ConcessaoBoxFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
