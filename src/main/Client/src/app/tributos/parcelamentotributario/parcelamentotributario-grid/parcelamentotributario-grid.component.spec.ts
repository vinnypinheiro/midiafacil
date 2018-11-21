import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioGridComponent } from './parcelamentotributario-grid.component'; 

describe('ParcelamentoTributarioGridComponent', () => { 
     let component: ParcelamentoTributarioGridComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ParcelamentoTributarioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
