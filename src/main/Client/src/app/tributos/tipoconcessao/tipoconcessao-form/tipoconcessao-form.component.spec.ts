import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoConcessaoFormComponent } from './tipoconcessao-form.component'; 

describe('TipoConcessaoFormComponent', () => { 
     let component: TipoConcessaoFormComponent; 
     let fixture: ComponentFixture<TipoConcessaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoConcessaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoConcessaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
