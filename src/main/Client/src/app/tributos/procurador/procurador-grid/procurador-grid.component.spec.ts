import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcuradorGridComponent } from './procurador-grid.component'; 

describe('ProcuradorGridComponent', () => { 
     let component: ProcuradorGridComponent; 
     let fixture: ComponentFixture<ProcuradorGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ProcuradorGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
