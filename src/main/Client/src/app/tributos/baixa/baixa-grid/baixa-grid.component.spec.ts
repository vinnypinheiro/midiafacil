import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BaixaGridComponent } from './baixa-grid.component'; 

describe('BaixaGridComponent', () => { 
     let component: BaixaGridComponent; 
     let fixture: ComponentFixture<BaixaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BaixaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
