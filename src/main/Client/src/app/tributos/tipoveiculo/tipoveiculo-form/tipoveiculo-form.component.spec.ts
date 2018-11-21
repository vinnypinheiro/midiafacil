import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoVeiculoFormComponent } from './tipoveiculo-form.component'; 

describe('TipoVeiculoFormComponent', () => { 
     let component: TipoVeiculoFormComponent; 
     let fixture: ComponentFixture<TipoVeiculoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoVeiculoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoVeiculoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
