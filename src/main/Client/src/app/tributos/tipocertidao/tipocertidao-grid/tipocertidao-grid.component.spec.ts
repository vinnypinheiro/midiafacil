import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoCertidaoGridComponent } from './tipocertidao-grid.component'; 

describe('TipoCertidaoGridComponent', () => { 
     let component: TipoCertidaoGridComponent; 
     let fixture: ComponentFixture<TipoCertidaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoCertidaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
