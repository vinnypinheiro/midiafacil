import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FormatoFormComponent } from './formato-form.component'; 

describe('FormatoFormComponent', () => { 
     let component: FormatoFormComponent; 
     let fixture: ComponentFixture<FormatoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ FormatoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(FormatoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
