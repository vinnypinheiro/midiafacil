import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BciModuloFormComponent } from './bcimodulo-form.component'; 

describe('BciModuloFormComponent', () => { 
     let component: BciModuloFormComponent; 
     let fixture: ComponentFixture<BciModuloFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BciModuloFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BciModuloFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
