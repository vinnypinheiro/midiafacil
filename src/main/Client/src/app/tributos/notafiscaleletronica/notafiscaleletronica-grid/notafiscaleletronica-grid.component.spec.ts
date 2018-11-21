import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NotaFiscalEletronicaGridComponent } from './notafiscaleletronica-grid.component'; 

describe('NotaFiscalEletronicaGridComponent', () => { 
     let component: NotaFiscalEletronicaGridComponent; 
     let fixture: ComponentFixture<NotaFiscalEletronicaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ NotaFiscalEletronicaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
