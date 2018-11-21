import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeGridComponent } from './cnae-grid.component'; 

describe('CnaeGridComponent', () => { 
     let component: CnaeGridComponent; 
     let fixture: ComponentFixture<CnaeGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
