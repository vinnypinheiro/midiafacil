import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PedidoInsercaoGridComponent } from './pedidoinsercao-grid.component'; 

describe('PedidoInsercaoGridComponent', () => { 
     let component: PedidoInsercaoGridComponent; 
     let fixture: ComponentFixture<PedidoInsercaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PedidoInsercaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
