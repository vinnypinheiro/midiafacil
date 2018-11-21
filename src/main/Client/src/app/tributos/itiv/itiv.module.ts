import { RouterModule } from '@angular/router'; 
 
import {ItivGridComponent} from './itiv-grid/itiv-grid.component'; 
import {ItivFormComponent} from './itiv-form/itiv-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ItivService} from './itiv.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ItivGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ItivFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ItivGridComponent, 
                ItivFormComponent, 
                ], 
                entryComponents: [ItivGridComponent,ItivFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ItivModule {} 
