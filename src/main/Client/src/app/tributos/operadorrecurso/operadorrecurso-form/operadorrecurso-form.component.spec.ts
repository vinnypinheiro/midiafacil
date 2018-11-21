import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OperadorRecursoFormComponent } from './operadorrecurso-form.component'; 

describe('OperadorRecursoFormComponent', () => { 
     let component: OperadorRecursoFormComponent; 
     let fixture: ComponentFixture<OperadorRecursoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ OperadorRecursoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(OperadorRecursoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
