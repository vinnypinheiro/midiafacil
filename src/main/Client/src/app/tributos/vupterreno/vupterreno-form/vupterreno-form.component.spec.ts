import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VupTerrenoFormComponent } from './vupterreno-form.component'; 

describe('VupTerrenoFormComponent', () => { 
     let component: VupTerrenoFormComponent; 
     let fixture: ComponentFixture<VupTerrenoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ VupTerrenoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(VupTerrenoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
