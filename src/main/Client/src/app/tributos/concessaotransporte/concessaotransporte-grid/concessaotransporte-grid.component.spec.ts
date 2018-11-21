import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ConcessaoTransporteGridComponent } from './concessaotransporte-grid.component'; 

describe('ConcessaoTransporteGridComponent', () => { 
     let component: ConcessaoTransporteGridComponent; 
     let fixture: ComponentFixture<ConcessaoTransporteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ConcessaoTransporteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
