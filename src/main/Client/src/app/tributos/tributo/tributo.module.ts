import { RouterModule } from '@angular/router'; 
 
import {TributoGridComponent} from './tributo-grid/tributo-grid.component'; 
import {TributoFormComponent} from './tributo-form/tributo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TributoService} from './tributo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TributoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TributoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TributoGridComponent, 
                TributoFormComponent, 
                ], 
                entryComponents: [TributoGridComponent,TributoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TributoModule {} 
