import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ParcelamentoTributarioDebitoFormComponent } from './parcelamentotributariodebito-form.component'; 

describe('ParcelamentoTributarioDebitoFormComponent', () => { 
     let component: ParcelamentoTributarioDebitoFormComponent; 
     let fixture: ComponentFixture<ParcelamentoTributarioDebitoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ParcelamentoTributarioDebitoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ParcelamentoTributarioDebitoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
