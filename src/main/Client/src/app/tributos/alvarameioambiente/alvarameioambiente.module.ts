import { RouterModule } from '@angular/router'; 
 
import {AlvaraMeioAmbienteGridComponent} from './alvarameioambiente-grid/alvarameioambiente-grid.component'; 
import {AlvaraMeioAmbienteFormComponent} from './alvarameioambiente-form/alvarameioambiente-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {AlvaraMeioAmbienteService} from './alvarameioambiente.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: AlvaraMeioAmbienteGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: AlvaraMeioAmbienteFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                AlvaraMeioAmbienteGridComponent, 
                AlvaraMeioAmbienteFormComponent, 
                ], 
                entryComponents: [AlvaraMeioAmbienteGridComponent,AlvaraMeioAmbienteFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class AlvaraMeioAmbienteModule {} 
