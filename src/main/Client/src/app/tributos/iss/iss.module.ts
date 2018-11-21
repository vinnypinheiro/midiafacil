import { RouterModule } from '@angular/router'; 
 
import {IssGridComponent} from './iss-grid/iss-grid.component'; 
import {IssFormComponent} from './iss-form/iss-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {IssService} from './iss.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: IssGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: IssFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                IssGridComponent, 
                IssFormComponent, 
                ], 
                entryComponents: [IssGridComponent,IssFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class IssModule {} 
