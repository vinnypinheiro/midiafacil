import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { ConcessaoTransporteFormComponent } from './concessaotransporte-form.component'; 

describe('ConcessaoTransporteFormComponent', () => { 
     let component: ConcessaoTransporteFormComponent; 
     let fixture: ComponentFixture<ConcessaoTransporteFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ ConcessaoTransporteFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(ConcessaoTransporteFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
