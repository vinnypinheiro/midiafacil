import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoParcelamentoTributarioFormComponent } from './tipoparcelamentotributario-form.component'; 

describe('TipoParcelamentoTributarioFormComponent', () => { 
     let component: TipoParcelamentoTributarioFormComponent; 
     let fixture: ComponentFixture<TipoParcelamentoTributarioFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoParcelamentoTributarioFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoParcelamentoTributarioFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
