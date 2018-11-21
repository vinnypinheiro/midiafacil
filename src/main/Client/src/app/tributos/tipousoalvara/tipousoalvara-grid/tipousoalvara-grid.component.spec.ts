import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUsoAlvaraGridComponent } from './tipousoalvara-grid.component'; 

describe('TipoUsoAlvaraGridComponent', () => { 
     let component: TipoUsoAlvaraGridComponent; 
     let fixture: ComponentFixture<TipoUsoAlvaraGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoUsoAlvaraGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
