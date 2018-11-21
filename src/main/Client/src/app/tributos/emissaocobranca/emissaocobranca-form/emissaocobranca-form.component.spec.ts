import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmissaoCobrancaFormComponent } from './emissaocobranca-form.component'; 

describe('EmissaoCobrancaFormComponent', () => { 
     let component: EmissaoCobrancaFormComponent; 
     let fixture: ComponentFixture<EmissaoCobrancaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ EmissaoCobrancaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(EmissaoCobrancaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
