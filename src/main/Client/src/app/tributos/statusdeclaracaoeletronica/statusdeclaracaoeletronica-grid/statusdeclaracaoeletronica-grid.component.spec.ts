import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { StatusDeclaracaoEletronicaGridComponent } from './statusdeclaracaoeletronica-grid.component'; 

describe('StatusDeclaracaoEletronicaGridComponent', () => { 
     let component: StatusDeclaracaoEletronicaGridComponent; 
     let fixture: ComponentFixture<StatusDeclaracaoEletronicaGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ StatusDeclaracaoEletronicaGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
