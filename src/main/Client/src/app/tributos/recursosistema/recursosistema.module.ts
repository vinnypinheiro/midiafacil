import { RouterModule } from '@angular/router'; 
 
import {RecursoSistemaGridComponent} from './recursosistema-grid/recursosistema-grid.component'; 
import {RecursoSistemaFormComponent} from './recursosistema-form/recursosistema-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {RecursoSistemaService} from './recursosistema.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: RecursoSistemaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: RecursoSistemaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                RecursoSistemaGridComponent, 
                RecursoSistemaFormComponent, 
                ], 
                entryComponents: [RecursoSistemaGridComponent,RecursoSistemaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class RecursoSistemaModule {} 
