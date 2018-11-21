import { RouterModule } from '@angular/router'; 
 
import {TffGridComponent} from './tff-grid/tff-grid.component'; 
import {TffFormComponent} from './tff-form/tff-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TffService} from './tff.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TffGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TffFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TffGridComponent, 
                TffFormComponent, 
                ], 
                entryComponents: [TffGridComponent,TffFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TffModule {} 
