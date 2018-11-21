import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDocumentoFiscalFormComponent } from './tipodocumentofiscal-form.component'; 

describe('TipoDocumentoFiscalFormComponent', () => { 
     let component: TipoDocumentoFiscalFormComponent; 
     let fixture: ComponentFixture<TipoDocumentoFiscalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoDocumentoFiscalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoDocumentoFiscalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
