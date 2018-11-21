import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BaixaStatusGridComponent } from './baixastatus-grid.component'; 

describe('BaixaStatusGridComponent', () => { 
     let component: BaixaStatusGridComponent; 
     let fixture: ComponentFixture<BaixaStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BaixaStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
