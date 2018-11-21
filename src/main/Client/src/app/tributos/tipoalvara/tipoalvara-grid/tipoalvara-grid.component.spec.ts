import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoAlvaraGridComponent } from './tipoalvara-grid.component'; 

describe('TipoAlvaraGridComponent', () => { 
     let component: TipoAlvaraGridComponent; 
     let fixture: ComponentFixture<TipoAlvaraGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoAlvaraGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
