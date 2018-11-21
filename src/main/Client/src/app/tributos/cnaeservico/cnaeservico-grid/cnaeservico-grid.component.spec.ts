import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeServicoGridComponent } from './cnaeservico-grid.component'; 

describe('CnaeServicoGridComponent', () => { 
     let component: CnaeServicoGridComponent; 
     let fixture: ComponentFixture<CnaeServicoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeServicoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
