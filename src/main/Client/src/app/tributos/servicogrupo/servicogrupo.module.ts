import { RouterModule } from '@angular/router'; 
 
import {ServicoGrupoGridComponent} from './servicogrupo-grid/servicogrupo-grid.component'; 
import {ServicoGrupoFormComponent} from './servicogrupo-form/servicogrupo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ServicoGrupoService} from './servicogrupo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ServicoGrupoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ServicoGrupoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ServicoGrupoGridComponent, 
                ServicoGrupoFormComponent, 
                ], 
                entryComponents: [ServicoGrupoGridComponent,ServicoGrupoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ServicoGrupoModule {} 
