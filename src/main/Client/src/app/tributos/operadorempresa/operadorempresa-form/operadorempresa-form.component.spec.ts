import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { OperadorEmpresaFormComponent } from './operadorempresa-form.component'; 

describe('OperadorEmpresaFormComponent', () => { 
     let component: OperadorEmpresaFormComponent; 
     let fixture: ComponentFixture<OperadorEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ OperadorEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(OperadorEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
