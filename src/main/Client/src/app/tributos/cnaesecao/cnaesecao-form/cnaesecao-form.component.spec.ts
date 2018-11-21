import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeSecaoFormComponent } from './cnaesecao-form.component'; 

describe('CnaeSecaoFormComponent', () => { 
     let component: CnaeSecaoFormComponent; 
     let fixture: ComponentFixture<CnaeSecaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeSecaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeSecaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
