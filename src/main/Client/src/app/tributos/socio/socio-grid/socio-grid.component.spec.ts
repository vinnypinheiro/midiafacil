import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { SocioGridComponent } from './socio-grid.component'; 

describe('SocioGridComponent', () => { 
     let component: SocioGridComponent; 
     let fixture: ComponentFixture<SocioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ SocioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
