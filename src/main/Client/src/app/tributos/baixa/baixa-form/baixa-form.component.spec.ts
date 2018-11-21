import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BaixaFormComponent } from './baixa-form.component'; 

describe('BaixaFormComponent', () => { 
     let component: BaixaFormComponent; 
     let fixture: ComponentFixture<BaixaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BaixaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BaixaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
