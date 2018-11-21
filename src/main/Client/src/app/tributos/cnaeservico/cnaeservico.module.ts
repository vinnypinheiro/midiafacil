import { RouterModule } from '@angular/router'; 
 
import {CnaeServicoGridComponent} from './cnaeservico-grid/cnaeservico-grid.component'; 
import {CnaeServicoFormComponent} from './cnaeservico-form/cnaeservico-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeServicoService} from './cnaeservico.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeServicoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeServicoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeServicoGridComponent, 
                CnaeServicoFormComponent, 
                ], 
                entryComponents: [CnaeServicoGridComponent,CnaeServicoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeServicoModule {} 
