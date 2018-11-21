import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ContaBancariaFormComponent } from './contabancaria-form.component'; 

describe('ContaBancariaFormComponent', () => { 
     let component: ContaBancariaFormComponent; 
     let fixture: ComponentFixture<ContaBancariaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ContaBancariaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ContaBancariaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
