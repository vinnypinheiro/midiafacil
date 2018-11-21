import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CertidaoEmitidaGridComponent } from './certidaoemitida-grid.component'; 

describe('CertidaoEmitidaGridComponent', () => { 
     let component: CertidaoEmitidaGridComponent; 
     let fixture: ComponentFixture<CertidaoEmitidaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CertidaoEmitidaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
