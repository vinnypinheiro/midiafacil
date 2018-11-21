import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDebitoGridComponent } from './tipodebito-grid.component'; 

describe('TipoDebitoGridComponent', () => { 
     let component: TipoDebitoGridComponent; 
     let fixture: ComponentFixture<TipoDebitoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoDebitoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
