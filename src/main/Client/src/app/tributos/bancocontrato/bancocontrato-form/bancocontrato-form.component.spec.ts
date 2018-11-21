import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { BancoContratoFormComponent } from './bancocontrato-form.component'; 

describe('BancoContratoFormComponent', () => { 
     let component: BancoContratoFormComponent; 
     let fixture: ComponentFixture<BancoContratoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ BancoContratoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(BancoContratoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
