import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciGrupoGridComponent } from './bcigrupo-grid.component'; 

describe('BciGrupoGridComponent', () => { 
     let component: BciGrupoGridComponent; 
     let fixture: ComponentFixture<BciGrupoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BciGrupoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
