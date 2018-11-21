import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmissaoCobrancaItemFormComponent } from './emissaocobrancaitem-form.component'; 

describe('EmissaoCobrancaItemFormComponent', () => { 
     let component: EmissaoCobrancaItemFormComponent; 
     let fixture: ComponentFixture<EmissaoCobrancaItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ EmissaoCobrancaItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(EmissaoCobrancaItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
