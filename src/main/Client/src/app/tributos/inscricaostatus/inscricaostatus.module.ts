import { RouterModule } from '@angular/router'; 
 
import {InscricaoStatusGridComponent} from './inscricaostatus-grid/inscricaostatus-grid.component'; 
import {InscricaoStatusFormComponent} from './inscricaostatus-form/inscricaostatus-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {InscricaoStatusService} from './inscricaostatus.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: InscricaoStatusGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: InscricaoStatusFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                InscricaoStatusGridComponent, 
                InscricaoStatusFormComponent, 
                ], 
                entryComponents: [InscricaoStatusGridComponent,InscricaoStatusFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class InscricaoStatusModule {} 
