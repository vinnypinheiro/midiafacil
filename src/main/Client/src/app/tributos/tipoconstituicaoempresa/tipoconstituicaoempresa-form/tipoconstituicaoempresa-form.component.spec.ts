import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoConstituicaoEmpresaFormComponent } from './tipoconstituicaoempresa-form.component'; 

describe('TipoConstituicaoEmpresaFormComponent', () => { 
     let component: TipoConstituicaoEmpresaFormComponent; 
     let fixture: ComponentFixture<TipoConstituicaoEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoConstituicaoEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoConstituicaoEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
