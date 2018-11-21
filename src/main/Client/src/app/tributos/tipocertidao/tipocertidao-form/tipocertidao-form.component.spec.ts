import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoCertidaoFormComponent } from './tipocertidao-form.component'; 

describe('TipoCertidaoFormComponent', () => { 
     let component: TipoCertidaoFormComponent; 
     let fixture: ComponentFixture<TipoCertidaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoCertidaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoCertidaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
