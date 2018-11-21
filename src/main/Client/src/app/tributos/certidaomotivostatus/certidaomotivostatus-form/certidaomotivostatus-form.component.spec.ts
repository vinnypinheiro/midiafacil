import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CertidaoMotivoStatusFormComponent } from './certidaomotivostatus-form.component'; 

describe('CertidaoMotivoStatusFormComponent', () => { 
     let component: CertidaoMotivoStatusFormComponent; 
     let fixture: ComponentFixture<CertidaoMotivoStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CertidaoMotivoStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CertidaoMotivoStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
