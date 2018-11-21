import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciitemItemFormComponent } from './bciitem-item-form.component';

describe('BciItemGridComponent', () => { 
     let component: BciitemItemFormComponent;
     let fixture: ComponentFixture<BciitemItemFormComponent>;

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ BciitemItemFormComponent ]
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
