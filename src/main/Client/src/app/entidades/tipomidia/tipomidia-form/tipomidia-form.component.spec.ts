import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { TipoMidiaFormComponent } from './tipomidia-form.component'; 

describe('TipoMidiaFormComponent', () => { 
     let component: TipoMidiaFormComponent; 
     let fixture: ComponentFixture<TipoMidiaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ TipoMidiaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(TipoMidiaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
