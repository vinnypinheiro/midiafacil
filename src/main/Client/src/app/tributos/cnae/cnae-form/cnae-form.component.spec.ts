import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeFormComponent } from './cnae-form.component'; 

describe('CnaeFormComponent', () => { 
     let component: CnaeFormComponent; 
     let fixture: ComponentFixture<CnaeFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
