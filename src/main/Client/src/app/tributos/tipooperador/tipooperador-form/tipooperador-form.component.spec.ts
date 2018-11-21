import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoOperadorFormComponent } from './tipooperador-form.component'; 

describe('TipoOperadorFormComponent', () => { 
     let component: TipoOperadorFormComponent; 
     let fixture: ComponentFixture<TipoOperadorFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoOperadorFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoOperadorFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
