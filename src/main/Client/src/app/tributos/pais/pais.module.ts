import { RouterModule } from '@angular/router'; 
 
import {PaisGridComponent} from './pais-grid/pais-grid.component'; 
import {PaisFormComponent} from './pais-form/pais-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PaisService} from './pais.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PaisGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PaisFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PaisGridComponent, 
                PaisFormComponent, 
                ], 
                entryComponents: [PaisGridComponent,PaisFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PaisModule {} 
