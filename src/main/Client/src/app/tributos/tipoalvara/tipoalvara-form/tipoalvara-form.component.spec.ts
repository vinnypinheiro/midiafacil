import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoAlvaraFormComponent } from './tipoalvara-form.component'; 

describe('TipoAlvaraFormComponent', () => { 
     let component: TipoAlvaraFormComponent; 
     let fixture: ComponentFixture<TipoAlvaraFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoAlvaraFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoAlvaraFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
