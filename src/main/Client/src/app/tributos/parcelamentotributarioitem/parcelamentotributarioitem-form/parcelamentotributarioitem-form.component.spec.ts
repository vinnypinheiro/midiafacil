import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioItemFormComponent } from './parcelamentotributarioitem-form.component'; 

describe('ParcelamentoTributarioItemFormComponent', () => { 
     let component: ParcelamentoTributarioItemFormComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ParcelamentoTributarioItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ParcelamentoTributarioItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
