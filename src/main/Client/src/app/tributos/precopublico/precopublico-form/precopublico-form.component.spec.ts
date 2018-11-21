import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { PrecoPublicoFormComponent } from './precopublico-form.component'; 

describe('PrecoPublicoFormComponent', () => { 
     let component: PrecoPublicoFormComponent; 
     let fixture: ComponentFixture<PrecoPublicoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ PrecoPublicoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(PrecoPublicoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
