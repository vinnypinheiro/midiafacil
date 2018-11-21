import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoVeiculoGridComponent } from './tipoveiculo-grid.component'; 

describe('TipoVeiculoGridComponent', () => { 
     let component: TipoVeiculoGridComponent; 
     let fixture: ComponentFixture<TipoVeiculoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoVeiculoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
