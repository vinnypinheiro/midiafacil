import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { HistoricoSimplesNacionalFormComponent } from './historicosimplesnacional-form.component'; 

describe('HistoricoSimplesNacionalFormComponent', () => { 
     let component: HistoricoSimplesNacionalFormComponent; 
     let fixture: ComponentFixture<HistoricoSimplesNacionalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ HistoricoSimplesNacionalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(HistoricoSimplesNacionalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
