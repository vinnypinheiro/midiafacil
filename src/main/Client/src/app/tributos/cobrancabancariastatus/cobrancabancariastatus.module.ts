import { RouterModule } from '@angular/router'; 
 
import {CobrancaBancariaStatusGridComponent} from './cobrancabancariastatus-grid/cobrancabancariastatus-grid.component'; 
import {CobrancaBancariaStatusFormComponent} from './cobrancabancariastatus-form/cobrancabancariastatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CobrancaBancariaStatusService} from './cobrancabancariastatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CobrancaBancariaStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CobrancaBancariaStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CobrancaBancariaStatusGridComponent, 
                CobrancaBancariaStatusFormComponent, 
                ], 
                entryComponents: [CobrancaBancariaStatusGridComponent,CobrancaBancariaStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CobrancaBancariaStatusModule {} 
