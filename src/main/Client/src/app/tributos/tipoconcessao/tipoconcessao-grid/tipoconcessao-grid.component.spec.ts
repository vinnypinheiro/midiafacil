import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoConcessaoGridComponent } from './tipoconcessao-grid.component'; 

describe('TipoConcessaoGridComponent', () => { 
     let component: TipoConcessaoGridComponent; 
     let fixture: ComponentFixture<TipoConcessaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoConcessaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
