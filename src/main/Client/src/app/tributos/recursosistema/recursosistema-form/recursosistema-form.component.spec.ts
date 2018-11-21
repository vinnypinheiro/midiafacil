import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { RecursoSistemaFormComponent } from './recursosistema-form.component'; 

describe('RecursoSistemaFormComponent', () => { 
     let component: RecursoSistemaFormComponent; 
     let fixture: ComponentFixture<RecursoSistemaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ RecursoSistemaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(RecursoSistemaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
