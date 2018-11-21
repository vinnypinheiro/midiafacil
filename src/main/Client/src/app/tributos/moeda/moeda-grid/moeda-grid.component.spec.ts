import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MoedaGridComponent } from './moeda-grid.component'; 

describe('MoedaGridComponent', () => { 
     let component: MoedaGridComponent; 
     let fixture: ComponentFixture<MoedaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ MoedaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
