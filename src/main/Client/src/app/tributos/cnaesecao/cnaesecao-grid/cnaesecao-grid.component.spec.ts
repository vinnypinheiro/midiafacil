import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeSecaoGridComponent } from './cnaesecao-grid.component'; 

describe('CnaeSecaoGridComponent', () => { 
     let component: CnaeSecaoGridComponent; 
     let fixture: ComponentFixture<CnaeSecaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeSecaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
