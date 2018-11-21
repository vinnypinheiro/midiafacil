import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VupConstrucaoFormComponent } from './vupconstrucao-form.component'; 

describe('VupConstrucaoFormComponent', () => { 
     let component: VupConstrucaoFormComponent; 
     let fixture: ComponentFixture<VupConstrucaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ VupConstrucaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(VupConstrucaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
