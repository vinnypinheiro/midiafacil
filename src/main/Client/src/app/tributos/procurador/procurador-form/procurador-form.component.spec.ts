import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ProcuradorFormComponent } from './procurador-form.component'; 

describe('ProcuradorFormComponent', () => { 
     let component: ProcuradorFormComponent; 
     let fixture: ComponentFixture<ProcuradorFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ProcuradorFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ProcuradorFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
