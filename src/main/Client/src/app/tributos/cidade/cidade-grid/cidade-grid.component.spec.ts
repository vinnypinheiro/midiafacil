import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CidadeGridComponent } from './cidade-grid.component'; 

describe('CidadeGridComponent', () => { 
     let component: CidadeGridComponent; 
     let fixture: ComponentFixture<CidadeGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CidadeGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
