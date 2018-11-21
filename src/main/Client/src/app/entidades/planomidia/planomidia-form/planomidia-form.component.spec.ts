import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PlanoMidiaFormComponent } from './planomidia-form.component'; 

describe('PlanoMidiaFormComponent', () => { 
     let component: PlanoMidiaFormComponent; 
     let fixture: ComponentFixture<PlanoMidiaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PlanoMidiaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PlanoMidiaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
