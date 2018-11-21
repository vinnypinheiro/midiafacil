import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { MoedaCotacaoFormComponent } from './moedacotacao-form.component'; 

describe('MoedaCotacaoFormComponent', () => { 
     let component: MoedaCotacaoFormComponent; 
     let fixture: ComponentFixture<MoedaCotacaoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ MoedaCotacaoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(MoedaCotacaoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
