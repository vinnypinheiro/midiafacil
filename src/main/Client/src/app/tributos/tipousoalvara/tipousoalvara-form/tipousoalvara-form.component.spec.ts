import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoUsoAlvaraFormComponent } from './tipousoalvara-form.component'; 

describe('TipoUsoAlvaraFormComponent', () => { 
     let component: TipoUsoAlvaraFormComponent; 
     let fixture: ComponentFixture<TipoUsoAlvaraFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoUsoAlvaraFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoUsoAlvaraFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
