import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CobrancaBancariaStatusGridComponent } from './cobrancabancariastatus-grid.component'; 

describe('CobrancaBancariaStatusGridComponent', () => { 
     let component: CobrancaBancariaStatusGridComponent; 
     let fixture: ComponentFixture<CobrancaBancariaStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CobrancaBancariaStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
