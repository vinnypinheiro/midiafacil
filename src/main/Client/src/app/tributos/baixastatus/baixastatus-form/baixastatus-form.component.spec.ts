import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BaixaStatusFormComponent } from './baixastatus-form.component'; 

describe('BaixaStatusFormComponent', () => { 
     let component: BaixaStatusFormComponent; 
     let fixture: ComponentFixture<BaixaStatusFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BaixaStatusFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BaixaStatusFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
