import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUnidadeEmpresaFormComponent } from './tipounidadeempresa-form.component'; 

describe('TipoUnidadeEmpresaFormComponent', () => { 
     let component: TipoUnidadeEmpresaFormComponent; 
     let fixture: ComponentFixture<TipoUnidadeEmpresaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoUnidadeEmpresaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoUnidadeEmpresaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
