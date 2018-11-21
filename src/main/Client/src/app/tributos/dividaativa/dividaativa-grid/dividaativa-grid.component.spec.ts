import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DividaAtivaGridComponent } from './dividaativa-grid.component'; 

describe('DividaAtivaGridComponent', () => { 
     let component: DividaAtivaGridComponent; 
     let fixture: ComponentFixture<DividaAtivaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ DividaAtivaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
