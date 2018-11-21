import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BancoContratoGridComponent } from './bancocontrato-grid.component'; 

describe('BancoContratoGridComponent', () => { 
     let component: BancoContratoGridComponent; 
     let fixture: ComponentFixture<BancoContratoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BancoContratoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
