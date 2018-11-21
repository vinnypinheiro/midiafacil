import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CertidaoMotivoStatusGridComponent } from './certidaomotivostatus-grid.component'; 

describe('CertidaoMotivoStatusGridComponent', () => { 
     let component: CertidaoMotivoStatusGridComponent; 
     let fixture: ComponentFixture<CertidaoMotivoStatusGridComponent>; 

     beforeEach(async(() => { 
          TestBed.configureTestingModule({ 
          declarations: [ CertidaoMotivoStatusGridComponent ] 
         }) 
         .compileComponents(); 
     })); 

     it('should create', () => { 
          expect(component).toBeTruthy(); 
     }); 
}); 
