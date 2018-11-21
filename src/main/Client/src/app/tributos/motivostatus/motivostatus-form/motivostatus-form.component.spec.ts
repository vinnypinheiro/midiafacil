import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MotivoStatusFormComponent } from './motivostatus-form.component'; 

describe('MotivoStatusFormComponent', () => { 
     let component: MotivoStatusFormComponent; 
     let fixture: ComponentFixture<MotivoStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ MotivoStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(MotivoStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
