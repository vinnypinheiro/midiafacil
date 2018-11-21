import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoLogradouroGridComponent } from './tipologradouro-grid.component'; 

describe('TipoLogradouroGridComponent', () => { 
     let component: TipoLogradouroGridComponent; 
     let fixture: ComponentFixture<TipoLogradouroGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoLogradouroGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
