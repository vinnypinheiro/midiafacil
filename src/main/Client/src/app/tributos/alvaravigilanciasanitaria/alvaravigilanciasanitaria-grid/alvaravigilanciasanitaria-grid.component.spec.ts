import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraVigilanciaSanitariaGridComponent } from './alvaravigilanciasanitaria-grid.component'; 

describe('AlvaraVigilanciaSanitariaGridComponent', () => { 
     let component: AlvaraVigilanciaSanitariaGridComponent; 
     let fixture: ComponentFixture<AlvaraVigilanciaSanitariaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ AlvaraVigilanciaSanitariaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
