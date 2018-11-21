import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioDebitoGridComponent } from './parcelamentotributariodebito-grid.component'; 

describe('ParcelamentoTributarioDebitoGridComponent', () => { 
     let component: ParcelamentoTributarioDebitoGridComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioDebitoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ParcelamentoTributarioDebitoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
