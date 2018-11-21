import { RouterModule } from '@angular/router'; 
 
import {BancoGridComponent} from './banco-grid/banco-grid.component'; 
import {BancoFormComponent} from './banco-form/banco-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {BancoService} from './banco.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: BancoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: BancoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                BancoGridComponent, 
                BancoFormComponent, 
                ], 
                entryComponents: [BancoGridComponent,BancoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class BancoModule {} 
