import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraMotivoStatusGridComponent } from './alvaramotivostatus-grid.component'; 

describe('AlvaraMotivoStatusGridComponent', () => { 
     let component: AlvaraMotivoStatusGridComponent; 
     let fixture: ComponentFixture<AlvaraMotivoStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ AlvaraMotivoStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
