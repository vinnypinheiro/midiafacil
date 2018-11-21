import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaOperacaoEmpresaFormComponent } from './naturezaoperacaoempresa-form.component'; 

describe('NaturezaOperacaoEmpresaFormComponent', () => { 
     let component: NaturezaOperacaoEmpresaFormComponent; 
     let fixture: ComponentFixture<NaturezaOperacaoEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ NaturezaOperacaoEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(NaturezaOperacaoEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
