import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CategoriaVeiculoGridComponent } from './categoriaveiculo-grid.component'; 

describe('CategoriaVeiculoGridComponent', () => { 
     let component: CategoriaVeiculoGridComponent; 
     let fixture: ComponentFixture<CategoriaVeiculoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CategoriaVeiculoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
