import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoContaGridComponent } from './tipoconta-grid.component'; 

describe('TipoContaGridComponent', () => { 
     let component: TipoContaGridComponent; 
     let fixture: ComponentFixture<TipoContaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoContaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
