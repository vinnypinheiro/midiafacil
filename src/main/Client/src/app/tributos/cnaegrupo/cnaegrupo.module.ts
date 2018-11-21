import { RouterModule } from '@angular/router'; 
 
import {CnaeGrupoGridComponent} from './cnaegrupo-grid/cnaegrupo-grid.component'; 
import {CnaeGrupoFormComponent} from './cnaegrupo-form/cnaegrupo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeGrupoService} from './cnaegrupo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeGrupoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeGrupoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeGrupoGridComponent, 
                CnaeGrupoFormComponent, 
                ], 
                entryComponents: [CnaeGrupoGridComponent,CnaeGrupoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeGrupoModule {} 
