import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ContaBancariaGridComponent } from './contabancaria-grid.component'; 

describe('ContaBancariaGridComponent', () => { 
     let component: ContaBancariaGridComponent; 
     let fixture: ComponentFixture<ContaBancariaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ContaBancariaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
