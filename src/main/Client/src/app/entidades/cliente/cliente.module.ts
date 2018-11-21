import { RouterModule } from '@angular/router'; 
 
import {ClienteGridComponent} from './cliente-grid/cliente-grid.component'; 
import {ClienteFormComponent} from './cliente-form/cliente-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ClienteService} from './cliente.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ClienteGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ClienteFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ClienteGridComponent, 
                ClienteFormComponent, 
                ], 
                entryComponents: [ClienteGridComponent,ClienteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ClienteModule {} 
