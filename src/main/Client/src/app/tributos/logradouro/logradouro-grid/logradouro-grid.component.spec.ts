import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LogradouroGridComponent } from './logradouro-grid.component'; 

describe('LogradouroGridComponent', () => { 
     let component: LogradouroGridComponent; 
     let fixture: ComponentFixture<LogradouroGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ LogradouroGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
