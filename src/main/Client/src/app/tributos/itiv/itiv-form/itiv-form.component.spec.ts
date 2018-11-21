import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ItivFormComponent } from './itiv-form.component'; 

describe('ItivFormComponent', () => { 
     let component: ItivFormComponent; 
     let fixture: ComponentFixture<ItivFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ItivFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ItivFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
