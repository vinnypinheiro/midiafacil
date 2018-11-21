import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MotivoStatusGridComponent } from './motivostatus-grid.component'; 

describe('MotivoStatusGridComponent', () => { 
     let component: MotivoStatusGridComponent; 
     let fixture: ComponentFixture<MotivoStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ MotivoStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
