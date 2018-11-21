import { RouterModule } from '@angular/router'; 
 
import {UfGridComponent} from './uf-grid/uf-grid.component'; 
import {UfFormComponent} from './uf-form/uf-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {UfService} from './uf.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: UfGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: UfFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                UfGridComponent, 
                UfFormComponent, 
                ], 
                entryComponents: [UfGridComponent,UfFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class UfModule {} 
