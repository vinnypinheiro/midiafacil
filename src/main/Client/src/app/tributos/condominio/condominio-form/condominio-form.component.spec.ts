import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CondominioFormComponent } from './condominio-form.component'; 

describe('CondominioFormComponent', () => { 
     let component: CondominioFormComponent; 
     let fixture: ComponentFixture<CondominioFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CondominioFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CondominioFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
