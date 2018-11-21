import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SuFormComponent } from './su-form.component'; 

describe('SuFormComponent', () => { 
     let component: SuFormComponent; 
     let fixture: ComponentFixture<SuFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ SuFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(SuFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
