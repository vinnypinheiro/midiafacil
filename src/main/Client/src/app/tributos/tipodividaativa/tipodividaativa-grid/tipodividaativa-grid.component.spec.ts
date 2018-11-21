import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDividaAtivaGridComponent } from './tipodividaativa-grid.component'; 

describe('TipoDividaAtivaGridComponent', () => { 
     let component: TipoDividaAtivaGridComponent; 
     let fixture: ComponentFixture<TipoDividaAtivaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoDividaAtivaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
