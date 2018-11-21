import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MoedaCotacaoGridComponent } from './moedacotacao-grid.component'; 

describe('MoedaCotacaoGridComponent', () => { 
     let component: MoedaCotacaoGridComponent; 
     let fixture: ComponentFixture<MoedaCotacaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ MoedaCotacaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
