import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LogradouroSegmentoGridComponent } from './logradourosegmento-grid.component'; 

describe('LogradouroSegmentoGridComponent', () => { 
     let component: LogradouroSegmentoGridComponent; 
     let fixture: ComponentFixture<LogradouroSegmentoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ LogradouroSegmentoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
