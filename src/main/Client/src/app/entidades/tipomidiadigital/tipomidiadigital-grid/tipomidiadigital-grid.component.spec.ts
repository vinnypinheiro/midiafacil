import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoMidiaDigitalGridComponent } from './tipomidiadigital-grid.component'; 

describe('TipoMidiaDigitalGridComponent', () => { 
     let component: TipoMidiaDigitalGridComponent; 
     let fixture: ComponentFixture<TipoMidiaDigitalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoMidiaDigitalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
