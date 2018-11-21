import { RouterModule } from '@angular/router'; 
 
import {ProcessoExecucaoGridComponent} from './processoexecucao-grid/processoexecucao-grid.component'; 
import {ProcessoExecucaoFormComponent} from './processoexecucao-form/processoexecucao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProcessoExecucaoService} from './processoexecucao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProcessoExecucaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProcessoExecucaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProcessoExecucaoGridComponent, 
                ProcessoExecucaoFormComponent, 
                ], 
                entryComponents: [ProcessoExecucaoGridComponent,ProcessoExecucaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProcessoExecucaoModule {} 
