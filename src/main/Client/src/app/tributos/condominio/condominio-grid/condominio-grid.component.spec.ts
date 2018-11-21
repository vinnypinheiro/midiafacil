import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CondominioGridComponent } from './condominio-grid.component'; 

describe('CondominioGridComponent', () => { 
     let component: CondominioGridComponent; 
     let fixture: ComponentFixture<CondominioGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CondominioGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
