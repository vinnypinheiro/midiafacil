import { RouterModule } from '@angular/router'; 
 
import {ServicoGridComponent} from './servico-grid/servico-grid.component'; 
import {ServicoFormComponent} from './servico-form/servico-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {ServicoService} from './servico.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: ServicoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: ServicoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                ServicoGridComponent, 
                ServicoFormComponent, 
                ], 
                entryComponents: [ServicoGridComponent,ServicoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class ServicoModule {} 
