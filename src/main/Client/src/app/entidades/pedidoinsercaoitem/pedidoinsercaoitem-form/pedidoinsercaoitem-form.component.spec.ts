import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PedidoInsercaoItemFormComponent } from './pedidoinsercaoitem-form.component'; 

describe('PedidoInsercaoItemFormComponent', () => { 
     let component: PedidoInsercaoItemFormComponent; 
     let fixture: ComponentFixture<PedidoInsercaoItemFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PedidoInsercaoItemFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PedidoInsercaoItemFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
