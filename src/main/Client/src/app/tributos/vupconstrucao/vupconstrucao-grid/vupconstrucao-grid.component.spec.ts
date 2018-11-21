import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VupConstrucaoGridComponent } from './vupconstrucao-grid.component'; 

describe('VupConstrucaoGridComponent', () => { 
     let component: VupConstrucaoGridComponent; 
     let fixture: ComponentFixture<VupConstrucaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ VupConstrucaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
