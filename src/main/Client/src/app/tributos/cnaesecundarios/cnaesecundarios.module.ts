import { RouterModule } from '@angular/router'; 
 
import {CnaeSecundariosGridComponent} from './cnaesecundarios-grid/cnaesecundarios-grid.component'; 
import {CnaeSecundariosFormComponent} from './cnaesecundarios-form/cnaesecundarios-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeSecundariosService} from './cnaesecundarios.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeSecundariosGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeSecundariosFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeSecundariosGridComponent, 
                CnaeSecundariosFormComponent, 
                ], 
                entryComponents: [CnaeSecundariosGridComponent,CnaeSecundariosFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeSecundariosModule {} 
