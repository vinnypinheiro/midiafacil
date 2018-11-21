import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { IptuGridComponent } from './iptu-grid.component'; 

describe('IptuGridComponent', () => { 
     let component: IptuGridComponent; 
     let fixture: ComponentFixture<IptuGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ IptuGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
