import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AlvaraEmitidoFormComponent } from './alvaraemitido-form.component'; 

describe('AlvaraEmitidoFormComponent', () => { 
     let component: AlvaraEmitidoFormComponent; 
     let fixture: ComponentFixture<AlvaraEmitidoFormComponent>; 
     beforeEach(async(() => { 
         TestBed.configureTestingModule({ 
             declarations: [ AlvaraEmitidoFormComponent ] 
         }) 
         .compileComponents(); 
     }));
     beforeEach(() => {
         fixture = TestBed.createComponent(AlvaraEmitidoFormComponent); 
         component = fixture.componentInstance; 
         fixture.detectChanges(); 
     }); 
     it('should create', () => { 
         expect(component).toBeTruthy(); 
     }); 
}); 
