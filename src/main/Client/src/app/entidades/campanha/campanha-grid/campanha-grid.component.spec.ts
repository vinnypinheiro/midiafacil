import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CampanhaGridComponent } from './campanha-grid.component'; 

describe('CampanhaGridComponent', () => { 
     let component: CampanhaGridComponent; 
     let fixture: ComponentFixture<CampanhaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CampanhaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
