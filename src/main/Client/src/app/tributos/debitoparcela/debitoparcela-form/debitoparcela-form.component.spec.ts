import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DebitoParcelaFormComponent } from './debitoparcela-form.component'; 

describe('DebitoParcelaFormComponent', () => { 
     let component: DebitoParcelaFormComponent; 
     let fixture: ComponentFixture<DebitoParcelaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ DebitoParcelaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(DebitoParcelaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
