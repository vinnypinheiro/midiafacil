import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDeclaracaoGridComponent } from './tipodeclaracao-grid.component'; 

describe('TipoDeclaracaoGridComponent', () => { 
     let component: TipoDeclaracaoGridComponent; 
     let fixture: ComponentFixture<TipoDeclaracaoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ TipoDeclaracaoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
