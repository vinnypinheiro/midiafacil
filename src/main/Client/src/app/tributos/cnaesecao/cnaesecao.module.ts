import { RouterModule } from '@angular/router'; 
 
import {CnaeSecaoGridComponent} from './cnaesecao-grid/cnaesecao-grid.component'; 
import {CnaeSecaoFormComponent} from './cnaesecao-form/cnaesecao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CnaeSecaoService} from './cnaesecao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CnaeSecaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CnaeSecaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CnaeSecaoGridComponent, 
                CnaeSecaoFormComponent, 
                ], 
                entryComponents: [CnaeSecaoGridComponent,CnaeSecaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CnaeSecaoModule {} 
