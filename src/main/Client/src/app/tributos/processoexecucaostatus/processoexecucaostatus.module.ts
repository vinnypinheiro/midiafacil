import { RouterModule } from '@angular/router'; 
 
import {ProcessoExecucaoStatusGridComponent} from './processoexecucaostatus-grid/processoexecucaostatus-grid.component'; 
import {ProcessoExecucaoStatusFormComponent} from './processoexecucaostatus-form/processoexecucaostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProcessoExecucaoStatusService} from './processoexecucaostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProcessoExecucaoStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProcessoExecucaoStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProcessoExecucaoStatusGridComponent, 
                ProcessoExecucaoStatusFormComponent, 
                ], 
                entryComponents: [ProcessoExecucaoStatusGridComponent,ProcessoExecucaoStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProcessoExecucaoStatusModule {} 
