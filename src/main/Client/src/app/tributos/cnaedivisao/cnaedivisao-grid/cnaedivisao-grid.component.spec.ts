import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeDivisaoGridComponent } from './cnaedivisao-grid.component'; 

describe('CnaeDivisaoGridComponent', () => { 
     let component: CnaeDivisaoGridComponent; 
     let fixture: ComponentFixture<CnaeDivisaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeDivisaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
