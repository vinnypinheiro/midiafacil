import { RouterModule } from '@angular/router'; 
 
import {CreditoBancarioGridComponent} from './creditobancario-grid/creditobancario-grid.component'; 
import {CreditoBancarioFormComponent} from './creditobancario-form/creditobancario-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CreditoBancarioService} from './creditobancario.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CreditoBancarioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CreditoBancarioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CreditoBancarioGridComponent, 
                CreditoBancarioFormComponent, 
                ], 
                entryComponents: [CreditoBancarioGridComponent,CreditoBancarioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CreditoBancarioModule {} 
