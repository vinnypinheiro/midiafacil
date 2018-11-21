import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { DividaAtivaItemFormComponent } from './dividaativaitem-form.component'; 

describe('DividaAtivaItemFormComponent', () => { 
     let component: DividaAtivaItemFormComponent; 
     let fixture: ComponentFixture<DividaAtivaItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ DividaAtivaItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(DividaAtivaItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
