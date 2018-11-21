import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PadraoConstrutivoFormComponent } from './padraoconstrutivo-form.component'; 

describe('PadraoConstrutivoFormComponent', () => { 
     let component: PadraoConstrutivoFormComponent; 
     let fixture: ComponentFixture<PadraoConstrutivoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PadraoConstrutivoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PadraoConstrutivoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
