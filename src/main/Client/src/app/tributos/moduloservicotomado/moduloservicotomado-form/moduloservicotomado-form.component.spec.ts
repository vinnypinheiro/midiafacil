import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ModuloServicoTomadoFormComponent } from './moduloservicotomado-form.component'; 

describe('ModuloServicoTomadoFormComponent', () => { 
     let component: ModuloServicoTomadoFormComponent; 
     let fixture: ComponentFixture<ModuloServicoTomadoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ModuloServicoTomadoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ModuloServicoTomadoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
