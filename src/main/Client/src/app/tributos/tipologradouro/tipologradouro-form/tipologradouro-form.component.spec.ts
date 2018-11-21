import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoLogradouroFormComponent } from './tipologradouro-form.component'; 

describe('TipoLogradouroFormComponent', () => { 
     let component: TipoLogradouroFormComponent; 
     let fixture: ComponentFixture<TipoLogradouroFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoLogradouroFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoLogradouroFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
