import { RouterModule } from '@angular/router'; 
 
import {CreditoBancarioItemGridComponent} from './creditobancarioitem-grid/creditobancarioitem-grid.component'; 
import {CreditoBancarioItemFormComponent} from './creditobancarioitem-form/creditobancarioitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CreditoBancarioItemService} from './creditobancarioitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CreditoBancarioItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CreditoBancarioItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CreditoBancarioItemGridComponent, 
                CreditoBancarioItemFormComponent, 
                ], 
                entryComponents: [CreditoBancarioItemGridComponent,CreditoBancarioItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CreditoBancarioItemModule {} 
