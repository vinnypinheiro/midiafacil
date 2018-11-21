import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OrgaoRegistroEmpresaFormComponent } from './orgaoregistroempresa-form.component'; 

describe('OrgaoRegistroEmpresaFormComponent', () => { 
     let component: OrgaoRegistroEmpresaFormComponent; 
     let fixture: ComponentFixture<OrgaoRegistroEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ OrgaoRegistroEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(OrgaoRegistroEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
