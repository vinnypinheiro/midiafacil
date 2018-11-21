import { RouterModule } from '@angular/router'; 
 
import {StatusDebitoGridComponent} from './statusdebito-grid/statusdebito-grid.component'; 
import {StatusDebitoFormComponent} from './statusdebito-form/statusdebito-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {StatusDebitoService} from './statusdebito.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: StatusDebitoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: StatusDebitoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                StatusDebitoGridComponent, 
                StatusDebitoFormComponent, 
                ], 
                entryComponents: [StatusDebitoGridComponent,StatusDebitoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class StatusDebitoModule {} 
