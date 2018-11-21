import { RouterModule } from '@angular/router'; 
 
import {ZonaGridComponent} from './zona-grid/zona-grid.component'; 
import {ZonaFormComponent} from './zona-form/zona-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ZonaService} from './zona.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ZonaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ZonaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ZonaGridComponent, 
                ZonaFormComponent, 
                ], 
                entryComponents: [ZonaGridComponent,ZonaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ZonaModule {} 
