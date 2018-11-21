import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CertidaoEmitidaFormComponent } from './certidaoemitida-form.component'; 

describe('CertidaoEmitidaFormComponent', () => { 
     let component: CertidaoEmitidaFormComponent; 
     let fixture: ComponentFixture<CertidaoEmitidaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CertidaoEmitidaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CertidaoEmitidaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
