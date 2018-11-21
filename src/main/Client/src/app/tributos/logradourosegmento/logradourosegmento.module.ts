import { RouterModule } from '@angular/router'; 
 
import {LogradouroSegmentoGridComponent} from './logradourosegmento-grid/logradourosegmento-grid.component'; 
import {LogradouroSegmentoFormComponent} from './logradourosegmento-form/logradourosegmento-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {LogradouroSegmentoService} from './logradourosegmento.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: LogradouroSegmentoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: LogradouroSegmentoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                LogradouroSegmentoGridComponent, 
                LogradouroSegmentoFormComponent, 
                ], 
                entryComponents: [LogradouroSegmentoGridComponent,LogradouroSegmentoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class LogradouroSegmentoModule {} 
