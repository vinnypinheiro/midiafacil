import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDocumentoFiscalGridComponent } from './tipodocumentofiscal-grid.component'; 

describe('TipoDocumentoFiscalGridComponent', () => { 
     let component: TipoDocumentoFiscalGridComponent; 
     let fixture: ComponentFixture<TipoDocumentoFiscalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoDocumentoFiscalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
