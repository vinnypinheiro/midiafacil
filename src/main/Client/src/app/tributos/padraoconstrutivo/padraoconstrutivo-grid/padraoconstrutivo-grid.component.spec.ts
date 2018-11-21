import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PadraoConstrutivoGridComponent } from './padraoconstrutivo-grid.component'; 

describe('PadraoConstrutivoGridComponent', () => { 
     let component: PadraoConstrutivoGridComponent; 
     let fixture: ComponentFixture<PadraoConstrutivoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ PadraoConstrutivoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
