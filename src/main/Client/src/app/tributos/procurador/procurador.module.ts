import { RouterModule } from '@angular/router'; 
 
import {ProcuradorGridComponent} from './procurador-grid/procurador-grid.component'; 
import {ProcuradorFormComponent} from './procurador-form/procurador-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ProcuradorService} from './procurador.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ProcuradorGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ProcuradorFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ProcuradorGridComponent, 
                ProcuradorFormComponent, 
                ], 
                entryComponents: [ProcuradorGridComponent,ProcuradorFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ProcuradorModule {} 
