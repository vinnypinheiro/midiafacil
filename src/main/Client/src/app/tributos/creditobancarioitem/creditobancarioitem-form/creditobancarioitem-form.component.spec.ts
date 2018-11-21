import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CreditoBancarioItemFormComponent } from './creditobancarioitem-form.component'; 

describe('CreditoBancarioItemFormComponent', () => { 
     let component: CreditoBancarioItemFormComponent; 
     let fixture: ComponentFixture<CreditoBancarioItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CreditoBancarioItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CreditoBancarioItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
