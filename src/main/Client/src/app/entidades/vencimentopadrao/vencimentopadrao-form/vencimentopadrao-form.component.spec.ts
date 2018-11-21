import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { VencimentoPadraoFormComponent } from './vencimentopadrao-form.component'; 

describe('VencimentoPadraoFormComponent', () => { 
     let component: VencimentoPadraoFormComponent; 
     let fixture: ComponentFixture<VencimentoPadraoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ VencimentoPadraoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(VencimentoPadraoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
