import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciItemGridComponent } from './bciitem-grid.component'; 

describe('BciItemGridComponent', () => { 
     let component: BciItemGridComponent; 
     let fixture: ComponentFixture<BciItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BciItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
