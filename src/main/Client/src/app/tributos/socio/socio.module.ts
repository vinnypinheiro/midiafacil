import { RouterModule } from '@angular/router'; 
 
import {SocioGridComponent} from './socio-grid/socio-grid.component'; 
import {SocioFormComponent} from './socio-form/socio-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {SocioService} from './socio.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: SocioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: SocioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                SocioGridComponent, 
                SocioFormComponent, 
                ], 
                entryComponents: [SocioGridComponent,SocioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class SocioModule {} 
