import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CategoriaVeiculoFormComponent } from './categoriaveiculo-form.component'; 

describe('CategoriaVeiculoFormComponent', () => { 
     let component: CategoriaVeiculoFormComponent; 
     let fixture: ComponentFixture<CategoriaVeiculoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ CategoriaVeiculoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(CategoriaVeiculoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
