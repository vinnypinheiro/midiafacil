import { RouterModule } from '@angular/router'; 
 
import {PrecoPublicoGridComponent} from './precopublico-grid/precopublico-grid.component'; 
import {PrecoPublicoFormComponent} from './precopublico-form/precopublico-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PrecoPublicoService} from './precopublico.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PrecoPublicoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PrecoPublicoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PrecoPublicoGridComponent, 
                PrecoPublicoFormComponent, 
                ], 
                entryComponents: [PrecoPublicoGridComponent,PrecoPublicoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PrecoPublicoModule {} 
