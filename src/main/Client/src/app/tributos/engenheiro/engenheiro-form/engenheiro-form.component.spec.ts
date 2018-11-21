import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { EngenheiroFormComponent } from './engenheiro-form.component'; 

describe('EngenheiroFormComponent', () => { 
     let component: EngenheiroFormComponent; 
     let fixture: ComponentFixture<EngenheiroFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ EngenheiroFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(EngenheiroFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
