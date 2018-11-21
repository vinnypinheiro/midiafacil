import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { RamoAtividadeGridComponent } from './ramoatividade-grid.component'; 

describe('RamoAtividadeGridComponent', () => { 
     let component: RamoAtividadeGridComponent; 
     let fixture: ComponentFixture<RamoAtividadeGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ RamoAtividadeGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
