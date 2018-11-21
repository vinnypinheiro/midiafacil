import { RouterModule } from '@angular/router'; 
 
import {AlvaraMotivoStatusGridComponent} from './alvaramotivostatus-grid/alvaramotivostatus-grid.component'; 
import {AlvaraMotivoStatusFormComponent} from './alvaramotivostatus-form/alvaramotivostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {AlvaraMotivoStatusService} from './alvaramotivostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: AlvaraMotivoStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: AlvaraMotivoStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                AlvaraMotivoStatusGridComponent, 
                AlvaraMotivoStatusFormComponent, 
                ], 
                entryComponents: [AlvaraMotivoStatusGridComponent,AlvaraMotivoStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class AlvaraMotivoStatusModule {} 
