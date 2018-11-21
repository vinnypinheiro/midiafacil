import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeClasseGridComponent } from './cnaeclasse-grid.component'; 

describe('CnaeClasseGridComponent', () => { 
     let component: CnaeClasseGridComponent; 
     let fixture: ComponentFixture<CnaeClasseGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeClasseGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
