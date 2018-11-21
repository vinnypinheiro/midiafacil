import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoContaFormComponent } from './tipoconta-form.component'; 

describe('TipoContaFormComponent', () => { 
     let component: TipoContaFormComponent; 
     let fixture: ComponentFixture<TipoContaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoContaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoContaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
