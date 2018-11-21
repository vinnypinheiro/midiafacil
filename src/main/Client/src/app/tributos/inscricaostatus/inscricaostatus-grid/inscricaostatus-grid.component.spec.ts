import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { InscricaoStatusGridComponent } from './inscricaostatus-grid.component'; 

describe('InscricaoStatusGridComponent', () => { 
     let component: InscricaoStatusGridComponent; 
     let fixture: ComponentFixture<InscricaoStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ InscricaoStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
