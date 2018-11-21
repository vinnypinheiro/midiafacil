import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoMidiaGridComponent } from './tipomidia-grid.component'; 

describe('TipoMidiaGridComponent', () => { 
     let component: TipoMidiaGridComponent; 
     let fixture: ComponentFixture<TipoMidiaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoMidiaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
