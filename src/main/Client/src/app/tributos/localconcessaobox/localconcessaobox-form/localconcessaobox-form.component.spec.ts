import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LocalConcessaoBoxFormComponent } from './localconcessaobox-form.component'; 

describe('LocalConcessaoBoxFormComponent', () => { 
     let component: LocalConcessaoBoxFormComponent; 
     let fixture: ComponentFixture<LocalConcessaoBoxFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ LocalConcessaoBoxFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(LocalConcessaoBoxFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
