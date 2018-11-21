import { RouterModule } from '@angular/router'; 
 
import {CreditoBancarioStatusGridComponent} from './creditobancariostatus-grid/creditobancariostatus-grid.component'; 
import {CreditoBancarioStatusFormComponent} from './creditobancariostatus-form/creditobancariostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CreditoBancarioStatusService} from './creditobancariostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CreditoBancarioStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CreditoBancarioStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CreditoBancarioStatusGridComponent, 
                CreditoBancarioStatusFormComponent, 
                ], 
                entryComponents: [CreditoBancarioStatusGridComponent,CreditoBancarioStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CreditoBancarioStatusModule {} 
