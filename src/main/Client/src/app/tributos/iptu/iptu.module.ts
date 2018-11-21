import { RouterModule } from '@angular/router'; 
 
import {IptuGridComponent} from './iptu-grid/iptu-grid.component'; 
import {IptuFormComponent} from './iptu-form/iptu-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {IptuService} from './iptu.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: IptuGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: IptuFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                IptuGridComponent, 
                IptuFormComponent, 
                ], 
                entryComponents: [IptuGridComponent,IptuFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class IptuModule {} 
