import { RouterModule } from '@angular/router'; 
 
import {ConcessaoTransporteGridComponent} from './concessaotransporte-grid/concessaotransporte-grid.component'; 
import {ConcessaoTransporteFormComponent} from './concessaotransporte-form/concessaotransporte-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ConcessaoTransporteService} from './concessaotransporte.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ConcessaoTransporteGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ConcessaoTransporteFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ConcessaoTransporteGridComponent, 
                ConcessaoTransporteFormComponent, 
                ], 
                entryComponents: [ConcessaoTransporteGridComponent,ConcessaoTransporteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ConcessaoTransporteModule {} 
