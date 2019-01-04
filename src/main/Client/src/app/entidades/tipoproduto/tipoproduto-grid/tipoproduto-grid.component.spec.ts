import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoProdutoGridComponent } from './tipoproduto-grid.component'; 

describe('TipoProdutoGridComponent', () => { 
     let component: TipoProdutoGridComponent; 
     let fixture: ComponentFixture<TipoProdutoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoProdutoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
