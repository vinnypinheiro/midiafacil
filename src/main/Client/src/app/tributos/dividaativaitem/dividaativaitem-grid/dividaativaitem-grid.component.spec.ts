import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DividaAtivaItemGridComponent } from './dividaativaitem-grid.component'; 

describe('DividaAtivaItemGridComponent', () => { 
     let component: DividaAtivaItemGridComponent; 
     let fixture: ComponentFixture<DividaAtivaItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DividaAtivaItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
