import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ClienteGridComponent } from './cliente-grid.component'; 

describe('ClienteGridComponent', () => { 
     let component: ClienteGridComponent; 
     let fixture: ComponentFixture<ClienteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ClienteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
