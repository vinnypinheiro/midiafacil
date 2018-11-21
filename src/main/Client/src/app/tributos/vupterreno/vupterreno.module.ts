import { RouterModule } from '@angular/router'; 
 
import {VupTerrenoGridComponent} from './vupterreno-grid/vupterreno-grid.component'; 
import {VupTerrenoFormComponent} from './vupterreno-form/vupterreno-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {VupTerrenoService} from './vupterreno.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: VupTerrenoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: VupTerrenoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                VupTerrenoGridComponent, 
                VupTerrenoFormComponent, 
                ], 
                entryComponents: [VupTerrenoGridComponent,VupTerrenoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class VupTerrenoModule {} 
