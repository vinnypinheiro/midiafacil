import { RouterModule } from '@angular/router'; 
 
import {OperadorGridComponent} from './operador-grid/operador-grid.component'; 
import {OperadorFormComponent} from './operador-form/operador-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {OperadorService} from './operador.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: OperadorGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: OperadorFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                OperadorGridComponent, 
                OperadorFormComponent, 
                ], 
                entryComponents: [OperadorGridComponent,OperadorFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class OperadorModule {} 
