import { RouterModule } from '@angular/router'; 
 
import {BciModuloGridComponent} from './bcimodulo-grid/bcimodulo-grid.component'; 
import {BciModuloFormComponent} from './bcimodulo-form/bcimodulo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BciModuloService} from './bcimodulo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BciModuloGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BciModuloFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BciModuloGridComponent, 
                BciModuloFormComponent, 
                ], 
                entryComponents: [BciModuloGridComponent,BciModuloFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BciModuloModule {} 
