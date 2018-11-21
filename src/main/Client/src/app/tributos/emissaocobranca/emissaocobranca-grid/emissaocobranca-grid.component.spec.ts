import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmissaoCobrancaGridComponent } from './emissaocobranca-grid.component'; 

describe('EmissaoCobrancaGridComponent', () => { 
     let component: EmissaoCobrancaGridComponent; 
     let fixture: ComponentFixture<EmissaoCobrancaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EmissaoCobrancaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
