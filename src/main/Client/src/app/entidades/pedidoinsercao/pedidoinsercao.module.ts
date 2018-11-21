import { RouterModule } from '@angular/router'; 
 
import {PedidoInsercaoGridComponent} from './pedidoinsercao-grid/pedidoinsercao-grid.component'; 
import {PedidoInsercaoFormComponent} from './pedidoinsercao-form/pedidoinsercao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PedidoInsercaoService} from './pedidoinsercao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PedidoInsercaoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PedidoInsercaoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PedidoInsercaoGridComponent, 
                PedidoInsercaoFormComponent, 
                ], 
                entryComponents: [PedidoInsercaoGridComponent,PedidoInsercaoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PedidoInsercaoModule {} 
