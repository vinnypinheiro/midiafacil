import { RouterModule } from '@angular/router'; 
 
import {ProcessoExecucaoHistoricoGridComponent} from './processoexecucaohistorico-grid/processoexecucaohistorico-grid.component'; 
import {ProcessoExecucaoHistoricoFormComponent} from './processoexecucaohistorico-form/processoexecucaohistorico-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProcessoExecucaoHistoricoService} from './processoexecucaohistorico.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProcessoExecucaoHistoricoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProcessoExecucaoHistoricoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProcessoExecucaoHistoricoGridComponent, 
                ProcessoExecucaoHistoricoFormComponent, 
                ], 
                entryComponents: [ProcessoExecucaoHistoricoGridComponent,ProcessoExecucaoHistoricoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProcessoExecucaoHistoricoModule {} 
