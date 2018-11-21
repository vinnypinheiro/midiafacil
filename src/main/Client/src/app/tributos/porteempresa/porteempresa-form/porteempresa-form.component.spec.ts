import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PorteEmpresaFormComponent } from './porteempresa-form.component'; 

describe('PorteEmpresaFormComponent', () => { 
     let component: PorteEmpresaFormComponent; 
     let fixture: ComponentFixture<PorteEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PorteEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PorteEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
