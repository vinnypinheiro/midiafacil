import { RouterModule } from '@angular/router'; 
 
import {EngenheiroGridComponent} from './engenheiro-grid/engenheiro-grid.component'; 
import {EngenheiroFormComponent} from './engenheiro-form/engenheiro-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {EngenheiroService} from './engenheiro.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: EngenheiroGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: EngenheiroFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                EngenheiroGridComponent, 
                EngenheiroFormComponent, 
                ], 
                entryComponents: [EngenheiroGridComponent,EngenheiroFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class EngenheiroModule {} 
