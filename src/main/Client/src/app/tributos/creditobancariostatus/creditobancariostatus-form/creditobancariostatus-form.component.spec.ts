import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioStatusFormComponent } from './creditobancariostatus-form.component'; 

describe('CreditoBancarioStatusFormComponent', () => { 
     let component: CreditoBancarioStatusFormComponent; 
     let fixture: ComponentFixture<CreditoBancarioStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CreditoBancarioStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CreditoBancarioStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
