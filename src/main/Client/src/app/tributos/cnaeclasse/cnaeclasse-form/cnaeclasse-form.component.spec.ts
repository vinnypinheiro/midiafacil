import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeClasseFormComponent } from './cnaeclasse-form.component'; 

describe('CnaeClasseFormComponent', () => { 
     let component: CnaeClasseFormComponent; 
     let fixture: ComponentFixture<CnaeClasseFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeClasseFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeClasseFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
