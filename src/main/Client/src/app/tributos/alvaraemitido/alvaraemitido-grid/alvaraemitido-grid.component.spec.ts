import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraEmitidoGridComponent } from './alvaraemitido-grid.component'; 

describe('AlvaraEmitidoGridComponent', () => { 
     let component: AlvaraEmitidoGridComponent; 
     let fixture: ComponentFixture<AlvaraEmitidoGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ AlvaraEmitidoGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
