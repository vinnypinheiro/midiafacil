import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioItemGridComponent } from './parcelamentotributarioitem-grid.component'; 

describe('ParcelamentoTributarioItemGridComponent', () => { 
     let component: ParcelamentoTributarioItemGridComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ParcelamentoTributarioItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
