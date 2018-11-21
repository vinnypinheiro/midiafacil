import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUnidadeFormComponent } from './tipounidade-form.component'; 

describe('TipoUnidadeFormComponent', () => { 
     let component: TipoUnidadeFormComponent; 
     let fixture: ComponentFixture<TipoUnidadeFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoUnidadeFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoUnidadeFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
