import { RouterModule } from '@angular/router'; 
 
import {NotaFiscalEletronicaGridComponent} from './notafiscaleletronica-grid/notafiscaleletronica-grid.component'; 
import {NotaFiscalEletronicaFormComponent} from './notafiscaleletronica-form/notafiscaleletronica-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {NotaFiscalEletronicaService} from './notafiscaleletronica.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: NotaFiscalEletronicaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: NotaFiscalEletronicaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                NotaFiscalEletronicaGridComponent, 
                NotaFiscalEletronicaFormComponent, 
                ], 
                entryComponents: [NotaFiscalEletronicaGridComponent,NotaFiscalEletronicaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class NotaFiscalEletronicaModule {} 
