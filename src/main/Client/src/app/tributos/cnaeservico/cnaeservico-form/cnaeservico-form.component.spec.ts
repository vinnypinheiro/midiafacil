import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CnaeServicoFormComponent } from './cnaeservico-form.component'; 

describe('CnaeServicoFormComponent', () => { 
     let component: CnaeServicoFormComponent; 
     let fixture: ComponentFixture<CnaeServicoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CnaeServicoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CnaeServicoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
