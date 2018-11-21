import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoCartorioFormComponent } from './tipocartorio-form.component'; 

describe('TipoCartorioFormComponent', () => { 
     let component: TipoCartorioFormComponent; 
     let fixture: ComponentFixture<TipoCartorioFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoCartorioFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoCartorioFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
