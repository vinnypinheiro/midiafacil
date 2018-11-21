import { RouterModule } from '@angular/router'; 
 
import {OperadorEmpresaGridComponent} from './operadorempresa-grid/operadorempresa-grid.component'; 
import {OperadorEmpresaFormComponent} from './operadorempresa-form/operadorempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {OperadorEmpresaService} from './operadorempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: OperadorEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: OperadorEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                OperadorEmpresaGridComponent, 
                OperadorEmpresaFormComponent, 
                ], 
                entryComponents: [OperadorEmpresaGridComponent,OperadorEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class OperadorEmpresaModule {} 
