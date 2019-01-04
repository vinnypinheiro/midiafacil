import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MailPiGridComponent } from './mailpi-grid.component'; 

describe('MailPiGridComponent', () => { 
     let component: MailPiGridComponent; 
     let fixture: ComponentFixture<MailPiGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ MailPiGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
