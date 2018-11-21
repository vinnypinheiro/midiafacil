import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeLicencaGridComponent } from './cnaelicenca-grid.component'; 

describe('CnaeLicencaGridComponent', () => { 
     let component: CnaeLicencaGridComponent; 
     let fixture: ComponentFixture<CnaeLicencaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeLicencaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
