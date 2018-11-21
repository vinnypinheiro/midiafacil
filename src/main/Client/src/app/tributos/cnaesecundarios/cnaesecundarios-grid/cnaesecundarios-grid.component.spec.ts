import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeSecundariosGridComponent } from './cnaesecundarios-grid.component'; 

describe('CnaeSecundariosGridComponent', () => { 
     let component: CnaeSecundariosGridComponent; 
     let fixture: ComponentFixture<CnaeSecundariosGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeSecundariosGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
