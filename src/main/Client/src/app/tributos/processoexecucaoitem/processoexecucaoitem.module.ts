import { RouterModule } from '@angular/router'; 
 
import {ProcessoExecucaoItemGridComponent} from './processoexecucaoitem-grid/processoexecucaoitem-grid.component'; 
import {ProcessoExecucaoItemFormComponent} from './processoexecucaoitem-form/processoexecucaoitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProcessoExecucaoItemService} from './processoexecucaoitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProcessoExecucaoItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProcessoExecucaoItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProcessoExecucaoItemGridComponent, 
                ProcessoExecucaoItemFormComponent, 
                ], 
                entryComponents: [ProcessoExecucaoItemGridComponent,ProcessoExecucaoItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProcessoExecucaoItemModule {} 
