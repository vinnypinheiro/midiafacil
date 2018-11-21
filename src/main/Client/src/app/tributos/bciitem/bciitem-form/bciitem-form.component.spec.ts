import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciItemFormComponent } from './bciitem-form.component'; 

describe('BciItemFormComponent', () => { 
     let component: BciItemFormComponent; 
     let fixture: ComponentFixture<BciItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BciItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BciItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
