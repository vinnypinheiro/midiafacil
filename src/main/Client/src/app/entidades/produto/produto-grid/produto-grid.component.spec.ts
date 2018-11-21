import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProdutoGridComponent } from './produto-grid.component'; 

describe('ProdutoGridComponent', () => { 
     let component: ProdutoGridComponent; 
     let fixture: ComponentFixture<ProdutoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProdutoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
