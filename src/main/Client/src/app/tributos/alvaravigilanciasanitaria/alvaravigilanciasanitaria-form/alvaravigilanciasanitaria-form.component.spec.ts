import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraVigilanciaSanitariaFormComponent } from './alvaravigilanciasanitaria-form.component'; 

describe('AlvaraVigilanciaSanitariaFormComponent', () => { 
     let component: AlvaraVigilanciaSanitariaFormComponent; 
     let fixture: ComponentFixture<AlvaraVigilanciaSanitariaFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ AlvaraVigilanciaSanitariaFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(AlvaraVigilanciaSanitariaFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
