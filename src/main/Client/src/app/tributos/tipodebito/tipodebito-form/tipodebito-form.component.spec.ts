import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDebitoFormComponent } from './tipodebito-form.component'; 

describe('TipoDebitoFormComponent', () => { 
     let component: TipoDebitoFormComponent; 
     let fixture: ComponentFixture<TipoDebitoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoDebitoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoDebitoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
