import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { LoteamentoFormComponent } from './loteamento-form.component'; 

describe('LoteamentoFormComponent', () => { 
     let component: LoteamentoFormComponent; 
     let fixture: ComponentFixture<LoteamentoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ LoteamentoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(LoteamentoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
