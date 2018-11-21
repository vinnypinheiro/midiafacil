import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ImovelGridComponent } from './imovel-grid.component'; 

describe('ImovelGridComponent', () => { 
     let component: ImovelGridComponent; 
     let fixture: ComponentFixture<ImovelGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ ImovelGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
