import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ReceitaGridComponent } from './receita-grid.component'; 

describe('ReceitaGridComponent', () => { 
     let component: ReceitaGridComponent; 
     let fixture: ComponentFixture<ReceitaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ReceitaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
