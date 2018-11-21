import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DebitoFormComponent } from './debito-form.component'; 

describe('DebitoFormComponent', () => { 
     let component: DebitoFormComponent; 
     let fixture: ComponentFixture<DebitoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ DebitoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(DebitoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
