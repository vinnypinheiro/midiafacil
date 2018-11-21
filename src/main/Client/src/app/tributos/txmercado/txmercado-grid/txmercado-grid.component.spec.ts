import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TxMercadoGridComponent } from './txmercado-grid.component'; 

describe('TxMercadoGridComponent', () => { 
     let component: TxMercadoGridComponent; 
     let fixture: ComponentFixture<TxMercadoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TxMercadoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
