import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeGrupoGridComponent } from './cnaegrupo-grid.component'; 

describe('CnaeGrupoGridComponent', () => { 
     let component: CnaeGrupoGridComponent; 
     let fixture: ComponentFixture<CnaeGrupoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CnaeGrupoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
