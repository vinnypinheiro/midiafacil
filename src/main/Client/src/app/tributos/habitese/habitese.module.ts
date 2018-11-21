import { RouterModule } from '@angular/router'; 
 
import {HabiteseGridComponent} from './habitese-grid/habitese-grid.component'; 
import {HabiteseFormComponent} from './habitese-form/habitese-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {HabiteseService} from './habitese.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: HabiteseGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: HabiteseFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                HabiteseGridComponent, 
                HabiteseFormComponent, 
                ], 
                entryComponents: [HabiteseGridComponent,HabiteseFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class HabiteseModule {} 
