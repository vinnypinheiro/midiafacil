import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDeclaranteFormComponent } from './tipodeclarante-form.component'; 

describe('TipoDeclaranteFormComponent', () => { 
     let component: TipoDeclaranteFormComponent; 
     let fixture: ComponentFixture<TipoDeclaranteFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoDeclaranteFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoDeclaranteFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
