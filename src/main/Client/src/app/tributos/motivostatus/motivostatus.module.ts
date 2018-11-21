import { RouterModule } from '@angular/router'; 
 
import {MotivoStatusGridComponent} from './motivostatus-grid/motivostatus-grid.component'; 
import {MotivoStatusFormComponent} from './motivostatus-form/motivostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {MotivoStatusService} from './motivostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MotivoStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MotivoStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                MotivoStatusGridComponent, 
                MotivoStatusFormComponent, 
                ], 
                entryComponents: [MotivoStatusGridComponent,MotivoStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MotivoStatusModule {} 
