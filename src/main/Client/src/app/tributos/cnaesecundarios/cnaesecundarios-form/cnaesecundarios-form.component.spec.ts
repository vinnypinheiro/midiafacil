import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeSecundariosFormComponent } from './cnaesecundarios-form.component'; 

describe('CnaeSecundariosFormComponent', () => { 
     let component: CnaeSecundariosFormComponent; 
     let fixture: ComponentFixture<CnaeSecundariosFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeSecundariosFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeSecundariosFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
