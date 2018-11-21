import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeLicencaFormComponent } from './cnaelicenca-form.component'; 

describe('CnaeLicencaFormComponent', () => { 
     let component: CnaeLicencaFormComponent; 
     let fixture: ComponentFixture<CnaeLicencaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeLicencaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeLicencaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
