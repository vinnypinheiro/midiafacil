import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CobrancaBancariaStatusFormComponent } from './cobrancabancariastatus-form.component'; 

describe('CobrancaBancariaStatusFormComponent', () => { 
     let component: CobrancaBancariaStatusFormComponent; 
     let fixture: ComponentFixture<CobrancaBancariaStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CobrancaBancariaStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CobrancaBancariaStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
