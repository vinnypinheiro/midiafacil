import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EngenheiroGridComponent } from './engenheiro-grid.component'; 

describe('EngenheiroGridComponent', () => { 
     let component: EngenheiroGridComponent; 
     let fixture: ComponentFixture<EngenheiroGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EngenheiroGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
