import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoContribuinteFormComponent } from './tipocontribuinte-form.component'; 

describe('TipoContribuinteFormComponent', () => { 
     let component: TipoContribuinteFormComponent; 
     let fixture: ComponentFixture<TipoContribuinteFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoContribuinteFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoContribuinteFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
