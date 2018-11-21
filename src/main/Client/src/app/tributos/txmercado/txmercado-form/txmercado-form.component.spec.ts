import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TxMercadoFormComponent } from './txmercado-form.component'; 

describe('TxMercadoFormComponent', () => { 
     let component: TxMercadoFormComponent; 
     let fixture: ComponentFixture<TxMercadoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TxMercadoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TxMercadoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
