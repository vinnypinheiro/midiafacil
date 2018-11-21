import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusSimplesNacionalFormComponent } from './statussimplesnacional-form.component'; 

describe('StatusSimplesNacionalFormComponent', () => { 
     let component: StatusSimplesNacionalFormComponent; 
     let fixture: ComponentFixture<StatusSimplesNacionalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ StatusSimplesNacionalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(StatusSimplesNacionalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
