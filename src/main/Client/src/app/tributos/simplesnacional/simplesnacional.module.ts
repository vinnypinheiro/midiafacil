import { RouterModule } from '@angular/router'; 
 
import {SimplesNacionalGridComponent} from './simplesnacional-grid/simplesnacional-grid.component'; 
import {SimplesNacionalFormComponent} from './simplesnacional-form/simplesnacional-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {SimplesNacionalService} from './simplesnacional.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: SimplesNacionalGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: SimplesNacionalFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                SimplesNacionalGridComponent, 
                SimplesNacionalFormComponent, 
                ], 
                entryComponents: [SimplesNacionalGridComponent,SimplesNacionalFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class SimplesNacionalModule {} 
