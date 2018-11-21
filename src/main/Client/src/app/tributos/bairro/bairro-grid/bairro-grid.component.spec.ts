import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BairroGridComponent } from './bairro-grid.component'; 

describe('BairroGridComponent', () => { 
     let component: BairroGridComponent; 
     let fixture: ComponentFixture<BairroGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BairroGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
