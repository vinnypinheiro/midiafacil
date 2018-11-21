import { RouterModule } from '@angular/router'; 
 
import {LogradouroGridComponent} from './logradouro-grid/logradouro-grid.component'; 
import {LogradouroFormComponent} from './logradouro-form/logradouro-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {LogradouroService} from './logradouro.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: LogradouroGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: LogradouroFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                LogradouroGridComponent, 
                LogradouroFormComponent, 
                ], 
                entryComponents: [LogradouroGridComponent,LogradouroFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class LogradouroModule {} 
