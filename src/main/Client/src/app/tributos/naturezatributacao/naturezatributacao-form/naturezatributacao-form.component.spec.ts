import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NaturezaTributacaoFormComponent } from './naturezatributacao-form.component'; 

describe('NaturezaTributacaoFormComponent', () => { 
     let component: NaturezaTributacaoFormComponent; 
     let fixture: ComponentFixture<NaturezaTributacaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ NaturezaTributacaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(NaturezaTributacaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
