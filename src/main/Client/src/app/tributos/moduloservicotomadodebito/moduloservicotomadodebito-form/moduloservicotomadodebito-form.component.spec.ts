import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ModuloServicoTomadoDebitoFormComponent } from './moduloservicotomadodebito-form.component'; 

describe('ModuloServicoTomadoDebitoFormComponent', () => { 
     let component: ModuloServicoTomadoDebitoFormComponent; 
     let fixture: ComponentFixture<ModuloServicoTomadoDebitoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ModuloServicoTomadoDebitoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ModuloServicoTomadoDebitoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
