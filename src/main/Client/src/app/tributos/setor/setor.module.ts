import { RouterModule } from '@angular/router'; 
 
import {SetorGridComponent} from './setor-grid/setor-grid.component'; 
import {SetorFormComponent} from './setor-form/setor-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {SetorService} from './setor.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: SetorGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: SetorFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                SetorGridComponent, 
                SetorFormComponent, 
                ], 
                entryComponents: [SetorGridComponent,SetorFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class SetorModule {} 
