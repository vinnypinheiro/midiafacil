import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraMeioAmbienteFormComponent } from './alvarameioambiente-form.component'; 

describe('AlvaraMeioAmbienteFormComponent', () => { 
     let component: AlvaraMeioAmbienteFormComponent; 
     let fixture: ComponentFixture<AlvaraMeioAmbienteFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ AlvaraMeioAmbienteFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(AlvaraMeioAmbienteFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
