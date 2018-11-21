import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraMotivoStatusFormComponent } from './alvaramotivostatus-form.component'; 

describe('AlvaraMotivoStatusFormComponent', () => { 
     let component: AlvaraMotivoStatusFormComponent; 
     let fixture: ComponentFixture<AlvaraMotivoStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ AlvaraMotivoStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(AlvaraMotivoStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
