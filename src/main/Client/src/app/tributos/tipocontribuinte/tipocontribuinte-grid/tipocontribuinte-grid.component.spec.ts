import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoContribuinteGridComponent } from './tipocontribuinte-grid.component'; 

describe('TipoContribuinteGridComponent', () => { 
     let component: TipoContribuinteGridComponent; 
     let fixture: ComponentFixture<TipoContribuinteGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoContribuinteGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
