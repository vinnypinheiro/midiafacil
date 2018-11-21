import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ServicoGrupoFormComponent } from './servicogrupo-form.component'; 

describe('ServicoGrupoFormComponent', () => { 
     let component: ServicoGrupoFormComponent; 
     let fixture: ComponentFixture<ServicoGrupoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ServicoGrupoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ServicoGrupoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
