import { RouterModule } from '@angular/router'; 
 
import {NotaFiscalAvulsaGridComponent} from './notafiscalavulsa-grid/notafiscalavulsa-grid.component'; 
import {NotaFiscalAvulsaFormComponent} from './notafiscalavulsa-form/notafiscalavulsa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {NotaFiscalAvulsaService} from './notafiscalavulsa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: NotaFiscalAvulsaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: NotaFiscalAvulsaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                NotaFiscalAvulsaGridComponent, 
                NotaFiscalAvulsaFormComponent, 
                ], 
                entryComponents: [NotaFiscalAvulsaGridComponent,NotaFiscalAvulsaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class NotaFiscalAvulsaModule {} 
