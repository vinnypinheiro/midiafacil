import { RouterModule } from '@angular/router'; 
 
import {BciGrupoGridComponent} from './bcigrupo-grid/bcigrupo-grid.component'; 
import {BciGrupoFormComponent} from './bcigrupo-form/bcigrupo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BciGrupoService} from './bcigrupo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BciGrupoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BciGrupoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BciGrupoGridComponent, 
                BciGrupoFormComponent, 
                ], 
                entryComponents: [BciGrupoGridComponent,BciGrupoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BciGrupoModule {} 
