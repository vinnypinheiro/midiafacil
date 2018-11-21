import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioFormComponent } from './creditobancario-form.component'; 

describe('CreditoBancarioFormComponent', () => { 
     let component: CreditoBancarioFormComponent; 
     let fixture: ComponentFixture<CreditoBancarioFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CreditoBancarioFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CreditoBancarioFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
