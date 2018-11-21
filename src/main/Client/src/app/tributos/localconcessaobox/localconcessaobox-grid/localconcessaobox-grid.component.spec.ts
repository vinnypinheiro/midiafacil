import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LocalConcessaoBoxGridComponent } from './localconcessaobox-grid.component'; 

describe('LocalConcessaoBoxGridComponent', () => { 
     let component: LocalConcessaoBoxGridComponent; 
     let fixture: ComponentFixture<LocalConcessaoBoxGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ LocalConcessaoBoxGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
