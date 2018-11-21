import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeGrupoFormComponent } from './cnaegrupo-form.component'; 

describe('CnaeGrupoFormComponent', () => { 
     let component: CnaeGrupoFormComponent; 
     let fixture: ComponentFixture<CnaeGrupoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeGrupoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeGrupoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
