import { RouterModule } from '@angular/router'; 
 
import {TipoContribuinteGridComponent} from './tipocontribuinte-grid/tipocontribuinte-grid.component'; 
import {TipoContribuinteFormComponent} from './tipocontribuinte-form/tipocontribuinte-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoContribuinteService} from './tipocontribuinte.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoContribuinteGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoContribuinteFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoContribuinteGridComponent, 
                TipoContribuinteFormComponent, 
                ], 
                entryComponents: [TipoContribuinteGridComponent,TipoContribuinteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoContribuinteModule {} 
