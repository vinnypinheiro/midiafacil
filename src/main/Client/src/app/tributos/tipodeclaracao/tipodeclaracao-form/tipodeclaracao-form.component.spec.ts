import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDeclaracaoFormComponent } from './tipodeclaracao-form.component'; 

describe('TipoDeclaracaoFormComponent', () => { 
     let component: TipoDeclaracaoFormComponent; 
     let fixture: ComponentFixture<TipoDeclaracaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoDeclaracaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoDeclaracaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
