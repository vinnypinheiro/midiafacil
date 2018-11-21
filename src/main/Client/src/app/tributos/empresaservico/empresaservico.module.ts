import { RouterModule } from '@angular/router'; 
 
import {EmpresaServicoGridComponent} from './empresaservico-grid/empresaservico-grid.component'; 
import {EmpresaServicoFormComponent} from './empresaservico-form/empresaservico-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EmpresaServicoService} from './empresaservico.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EmpresaServicoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EmpresaServicoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EmpresaServicoGridComponent, 
                EmpresaServicoFormComponent, 
                ], 
                entryComponents: [EmpresaServicoGridComponent,EmpresaServicoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EmpresaServicoModule {} 
