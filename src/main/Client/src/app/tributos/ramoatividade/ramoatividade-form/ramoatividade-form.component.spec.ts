import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { RamoAtividadeFormComponent } from './ramoatividade-form.component'; 

describe('RamoAtividadeFormComponent', () => { 
     let component: RamoAtividadeFormComponent; 
     let fixture: ComponentFixture<RamoAtividadeFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ RamoAtividadeFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(RamoAtividadeFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
