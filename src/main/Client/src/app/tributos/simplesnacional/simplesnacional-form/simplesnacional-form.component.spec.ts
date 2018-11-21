import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SimplesNacionalFormComponent } from './simplesnacional-form.component'; 

describe('SimplesNacionalFormComponent', () => { 
     let component: SimplesNacionalFormComponent; 
     let fixture: ComponentFixture<SimplesNacionalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ SimplesNacionalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(SimplesNacionalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
