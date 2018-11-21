import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { InscricaoStatusFormComponent } from './inscricaostatus-form.component'; 

describe('InscricaoStatusFormComponent', () => { 
     let component: InscricaoStatusFormComponent; 
     let fixture: ComponentFixture<InscricaoStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ InscricaoStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(InscricaoStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
