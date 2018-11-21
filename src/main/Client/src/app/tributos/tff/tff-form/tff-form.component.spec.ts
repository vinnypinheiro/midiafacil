import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TffFormComponent } from './tff-form.component'; 

describe('TffFormComponent', () => { 
     let component: TffFormComponent; 
     let fixture: ComponentFixture<TffFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TffFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TffFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
