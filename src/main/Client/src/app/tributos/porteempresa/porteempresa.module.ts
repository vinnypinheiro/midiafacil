import { RouterModule } from '@angular/router'; 
 
import {PorteEmpresaGridComponent} from './porteempresa-grid/porteempresa-grid.component'; 
import {PorteEmpresaFormComponent} from './porteempresa-form/porteempresa-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PorteEmpresaService} from './porteempresa.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PorteEmpresaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PorteEmpresaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PorteEmpresaGridComponent, 
                PorteEmpresaFormComponent, 
                ], 
                entryComponents: [PorteEmpresaGridComponent,PorteEmpresaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PorteEmpresaModule {} 
