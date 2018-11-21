import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoDividaAtivaFormComponent } from './tipodividaativa-form.component'; 

describe('TipoDividaAtivaFormComponent', () => { 
     let component: TipoDividaAtivaFormComponent; 
     let fixture: ComponentFixture<TipoDividaAtivaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoDividaAtivaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoDividaAtivaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
