import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioFormComponent } from './parcelamentotributario-form.component'; 

describe('ParcelamentoTributarioFormComponent', () => { 
     let component: ParcelamentoTributarioFormComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ParcelamentoTributarioFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ParcelamentoTributarioFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
