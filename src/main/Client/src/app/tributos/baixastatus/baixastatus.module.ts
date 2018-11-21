import { RouterModule } from '@angular/router'; 
 
import {BaixaStatusGridComponent} from './baixastatus-grid/baixastatus-grid.component'; 
import {BaixaStatusFormComponent} from './baixastatus-form/baixastatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BaixaStatusService} from './baixastatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BaixaStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BaixaStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BaixaStatusGridComponent, 
                BaixaStatusFormComponent, 
                ], 
                entryComponents: [BaixaStatusGridComponent,BaixaStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BaixaStatusModule {} 
