import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TributoFormComponent } from './tributo-form.component'; 

describe('TributoFormComponent', () => { 
     let component: TributoFormComponent; 
     let fixture: ComponentFixture<TributoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TributoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TributoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
