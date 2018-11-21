import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LogradouroSegmentoFormComponent } from './logradourosegmento-form.component'; 

describe('LogradouroSegmentoFormComponent', () => { 
     let component: LogradouroSegmentoFormComponent; 
     let fixture: ComponentFixture<LogradouroSegmentoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ LogradouroSegmentoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(LogradouroSegmentoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
