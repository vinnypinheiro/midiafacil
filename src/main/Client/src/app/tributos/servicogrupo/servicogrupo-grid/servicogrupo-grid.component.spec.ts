import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ServicoGrupoGridComponent } from './servicogrupo-grid.component'; 

describe('ServicoGrupoGridComponent', () => { 
     let component: ServicoGrupoGridComponent; 
     let fixture: ComponentFixture<ServicoGrupoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ServicoGrupoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
