import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DividaAtivaFormComponent } from './dividaativa-form.component'; 

describe('DividaAtivaFormComponent', () => { 
     let component: DividaAtivaFormComponent; 
     let fixture: ComponentFixture<DividaAtivaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ DividaAtivaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(DividaAtivaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
