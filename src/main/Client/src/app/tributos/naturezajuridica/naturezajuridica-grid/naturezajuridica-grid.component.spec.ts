import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaJuridicaGridComponent } from './naturezajuridica-grid.component'; 

describe('NaturezaJuridicaGridComponent', () => { 
     let component: NaturezaJuridicaGridComponent; 
     let fixture: ComponentFixture<NaturezaJuridicaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ NaturezaJuridicaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
