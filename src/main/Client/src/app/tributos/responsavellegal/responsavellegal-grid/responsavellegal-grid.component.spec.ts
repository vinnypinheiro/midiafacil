import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ResponsavelLegalGridComponent } from './responsavellegal-grid.component'; 

describe('ResponsavelLegalGridComponent', () => { 
     let component: ResponsavelLegalGridComponent; 
     let fixture: ComponentFixture<ResponsavelLegalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ResponsavelLegalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
