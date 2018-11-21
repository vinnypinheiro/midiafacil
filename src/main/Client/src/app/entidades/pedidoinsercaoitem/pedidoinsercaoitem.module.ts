import { RouterModule } from '@angular/router'; 
 
import {PedidoInsercaoItemGridComponent} from './pedidoinsercaoitem-grid/pedidoinsercaoitem-grid.component'; 
import {PedidoInsercaoItemFormComponent} from './pedidoinsercaoitem-form/pedidoinsercaoitem-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {PedidoInsercaoItemService} from './pedidoinsercaoitem.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: PedidoInsercaoItemGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: PedidoInsercaoItemFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                PedidoInsercaoItemGridComponent, 
                PedidoInsercaoItemFormComponent, 
                ], 
                entryComponents: [PedidoInsercaoItemGridComponent,PedidoInsercaoItemFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class PedidoInsercaoItemModule {} 
