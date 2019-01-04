import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FormatoRevistaFormComponent } from './formatorevista-form.component'; 

describe('FormatoRevistaFormComponent', () => { 
     let component: FormatoRevistaFormComponent; 
     let fixture: ComponentFixture<FormatoRevistaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ FormatoRevistaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(FormatoRevistaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
