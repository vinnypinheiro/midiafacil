import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PedidoInsercaoItemGridComponent } from './pedidoinsercaoitem-grid.component'; 

describe('PedidoInsercaoItemGridComponent', () => { 
     let component: PedidoInsercaoItemGridComponent; 
     let fixture: ComponentFixture<PedidoInsercaoItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PedidoInsercaoItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
