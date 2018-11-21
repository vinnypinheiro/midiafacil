import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { HabiteseFormComponent } from './habitese-form.component'; 

describe('HabiteseFormComponent', () => { 
     let component: HabiteseFormComponent; 
     let fixture: ComponentFixture<HabiteseFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ HabiteseFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(HabiteseFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
