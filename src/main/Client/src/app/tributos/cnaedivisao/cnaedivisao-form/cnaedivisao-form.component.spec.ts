import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeDivisaoFormComponent } from './cnaedivisao-form.component'; 

describe('CnaeDivisaoFormComponent', () => { 
     let component: CnaeDivisaoFormComponent; 
     let fixture: ComponentFixture<CnaeDivisaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeDivisaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeDivisaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
