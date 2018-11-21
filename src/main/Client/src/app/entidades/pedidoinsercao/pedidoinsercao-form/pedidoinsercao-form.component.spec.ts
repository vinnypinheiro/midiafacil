import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PedidoInsercaoFormComponent } from './pedidoinsercao-form.component'; 

describe('PedidoInsercaoFormComponent', () => { 
     let component: PedidoInsercaoFormComponent; 
     let fixture: ComponentFixture<PedidoInsercaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PedidoInsercaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PedidoInsercaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
