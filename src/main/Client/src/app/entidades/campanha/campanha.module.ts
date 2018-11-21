import { RouterModule } from '@angular/router'; 
 
import {CampanhaGridComponent} from './campanha-grid/campanha-grid.component'; 
import {CampanhaFormComponent} from './campanha-form/campanha-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {CampanhaService} from './campanha.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: CampanhaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: CampanhaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                CampanhaGridComponent, 
                CampanhaFormComponent, 
                ], 
                entryComponents: [CampanhaGridComponent,CampanhaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class CampanhaModule {} 
