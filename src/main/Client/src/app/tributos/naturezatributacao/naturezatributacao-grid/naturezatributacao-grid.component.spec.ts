import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaTributacaoGridComponent } from './naturezatributacao-grid.component'; 

describe('NaturezaTributacaoGridComponent', () => { 
     let component: NaturezaTributacaoGridComponent; 
     let fixture: ComponentFixture<NaturezaTributacaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ NaturezaTributacaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
