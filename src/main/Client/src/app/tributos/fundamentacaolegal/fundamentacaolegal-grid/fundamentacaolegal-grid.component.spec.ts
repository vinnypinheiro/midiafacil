import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { FundamentacaoLegalGridComponent } from './fundamentacaolegal-grid.component'; 

describe('FundamentacaoLegalGridComponent', () => { 
     let component: FundamentacaoLegalGridComponent; 
     let fixture: ComponentFixture<FundamentacaoLegalGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ FundamentacaoLegalGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
