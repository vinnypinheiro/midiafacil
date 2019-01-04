import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VencimentoPadraoGridComponent } from './vencimentopadrao-grid.component'; 

describe('VencimentoPadraoGridComponent', () => { 
     let component: VencimentoPadraoGridComponent; 
     let fixture: ComponentFixture<VencimentoPadraoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ VencimentoPadraoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
