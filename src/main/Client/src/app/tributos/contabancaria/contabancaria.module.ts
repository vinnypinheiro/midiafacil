import { RouterModule } from '@angular/router'; 
 
import {ContaBancariaGridComponent} from './contabancaria-grid/contabancaria-grid.component'; 
import {ContaBancariaFormComponent} from './contabancaria-form/contabancaria-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ContaBancariaService} from './contabancaria.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ContaBancariaGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ContaBancariaFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ContaBancariaGridComponent, 
                ContaBancariaFormComponent, 
                ], 
                entryComponents: [ContaBancariaGridComponent,ContaBancariaFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ContaBancariaModule {} 
