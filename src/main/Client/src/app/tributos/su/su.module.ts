import { RouterModule } from '@angular/router'; 
 
import {SuGridComponent} from './su-grid/su-grid.component'; 
import {SuFormComponent} from './su-form/su-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {SuService} from './su.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: SuGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: SuFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                SuGridComponent, 
                SuFormComponent, 
                ], 
                entryComponents: [SuGridComponent,SuFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class SuModule {} 
