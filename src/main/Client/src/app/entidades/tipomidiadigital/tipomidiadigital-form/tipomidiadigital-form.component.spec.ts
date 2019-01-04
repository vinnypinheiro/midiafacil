import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoMidiaDigitalFormComponent } from './tipomidiadigital-form.component'; 

describe('TipoMidiaDigitalFormComponent', () => { 
     let component: TipoMidiaDigitalFormComponent; 
     let fixture: ComponentFixture<TipoMidiaDigitalFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoMidiaDigitalFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoMidiaDigitalFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
