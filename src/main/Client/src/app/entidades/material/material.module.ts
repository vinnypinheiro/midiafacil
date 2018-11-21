import { RouterModule } from '@angular/router'; 
 
import {MaterialGridComponent} from './material-grid/material-grid.component'; 
import {MaterialFormComponent} from './material-form/material-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {MaterialService} from './material.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: MaterialGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: MaterialFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                MaterialGridComponent, 
                MaterialFormComponent, 
                ], 
                entryComponents: [MaterialGridComponent,MaterialFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class MaterialModule {} 
