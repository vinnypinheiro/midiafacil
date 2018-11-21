import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaJuridicaFormComponent } from './naturezajuridica-form.component'; 

describe('NaturezaJuridicaFormComponent', () => { 
     let component: NaturezaJuridicaFormComponent; 
     let fixture: ComponentFixture<NaturezaJuridicaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ NaturezaJuridicaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(NaturezaJuridicaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
