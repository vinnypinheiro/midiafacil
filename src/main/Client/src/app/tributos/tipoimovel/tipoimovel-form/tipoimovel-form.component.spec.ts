import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoImovelFormComponent } from './tipoimovel-form.component'; 

describe('TipoImovelFormComponent', () => { 
     let component: TipoImovelFormComponent; 
     let fixture: ComponentFixture<TipoImovelFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoImovelFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoImovelFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
