import { RouterModule } from '@angular/router'; 
 
import {OperadorRecursoGridComponent} from './operadorrecurso-grid/operadorrecurso-grid.component'; 
import {OperadorRecursoFormComponent} from './operadorrecurso-form/operadorrecurso-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {OperadorRecursoService} from './operadorrecurso.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: OperadorRecursoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: OperadorRecursoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                OperadorRecursoGridComponent, 
                OperadorRecursoFormComponent, 
                ], 
                entryComponents: [OperadorRecursoGridComponent,OperadorRecursoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class OperadorRecursoModule {} 
