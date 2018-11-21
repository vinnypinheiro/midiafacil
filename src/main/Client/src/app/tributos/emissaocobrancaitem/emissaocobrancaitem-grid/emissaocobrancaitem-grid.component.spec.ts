import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EmissaoCobrancaItemGridComponent } from './emissaocobrancaitem-grid.component'; 

describe('EmissaoCobrancaItemGridComponent', () => { 
     let component: EmissaoCobrancaItemGridComponent; 
     let fixture: ComponentFixture<EmissaoCobrancaItemGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ EmissaoCobrancaItemGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
