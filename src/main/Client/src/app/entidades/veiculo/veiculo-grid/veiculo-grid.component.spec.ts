import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VeiculoGridComponent } from './veiculo-grid.component'; 

describe('VeiculoGridComponent', () => { 
     let component: VeiculoGridComponent; 
     let fixture: ComponentFixture<VeiculoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ VeiculoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
