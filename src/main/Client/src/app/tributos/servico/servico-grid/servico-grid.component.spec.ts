import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ServicoGridComponent } from './servico-grid.component'; 

describe('ServicoGridComponent', () => { 
     let component: ServicoGridComponent; 
     let fixture: ComponentFixture<ServicoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ServicoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
