import { RouterModule } from '@angular/router'; 
 
import {RamoAtividadeGridComponent} from './ramoatividade-grid/ramoatividade-grid.component'; 
import {RamoAtividadeFormComponent} from './ramoatividade-form/ramoatividade-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {RamoAtividadeService} from './ramoatividade.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: RamoAtividadeGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: RamoAtividadeFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                RamoAtividadeGridComponent, 
                RamoAtividadeFormComponent, 
                ], 
                entryComponents: [RamoAtividadeGridComponent,RamoAtividadeFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class RamoAtividadeModule {} 
