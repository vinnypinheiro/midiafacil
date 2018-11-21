import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ServicoTomadoFormComponent } from './servicotomado-form.component'; 

describe('ServicoTomadoFormComponent', () => { 
     let component: ServicoTomadoFormComponent; 
     let fixture: ComponentFixture<ServicoTomadoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ServicoTomadoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ServicoTomadoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
