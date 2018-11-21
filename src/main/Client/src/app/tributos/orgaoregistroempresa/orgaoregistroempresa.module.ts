import { RouterModule } from '@angular/router'; 
 
import {OrgaoRegistroEmpresaGridComponent} from './orgaoregistroempresa-grid/orgaoregistroempresa-grid.component'; 
import {OrgaoRegistroEmpresaFormComponent} from './orgaoregistroempresa-form/orgaoregistroempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {OrgaoRegistroEmpresaService} from './orgaoregistroempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: OrgaoRegistroEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: OrgaoRegistroEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                OrgaoRegistroEmpresaGridComponent, 
                OrgaoRegistroEmpresaFormComponent, 
                ], 
                entryComponents: [OrgaoRegistroEmpresaGridComponent,OrgaoRegistroEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class OrgaoRegistroEmpresaModule {} 
