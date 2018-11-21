import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciGrupoFormComponent } from './bcigrupo-form.component'; 

describe('BciGrupoFormComponent', () => { 
     let component: BciGrupoFormComponent; 
     let fixture: ComponentFixture<BciGrupoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BciGrupoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BciGrupoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
