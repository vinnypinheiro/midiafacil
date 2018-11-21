import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ResponsavelLegalFormComponent } from './responsavellegal-form.component'; 

describe('ResponsavelLegalFormComponent', () => { 
     let component: ResponsavelLegalFormComponent; 
     let fixture: ComponentFixture<ResponsavelLegalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ResponsavelLegalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ResponsavelLegalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
