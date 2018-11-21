import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoCartorioGridComponent } from './tipocartorio-grid.component'; 

describe('TipoCartorioGridComponent', () => { 
     let component: TipoCartorioGridComponent; 
     let fixture: ComponentFixture<TipoCartorioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoCartorioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
