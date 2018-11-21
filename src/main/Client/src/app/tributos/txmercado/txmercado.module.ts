import { RouterModule } from '@angular/router'; 
 
import {TxMercadoGridComponent} from './txmercado-grid/txmercado-grid.component'; 
import {TxMercadoFormComponent} from './txmercado-form/txmercado-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TxMercadoService} from './txmercado.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TxMercadoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TxMercadoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TxMercadoGridComponent, 
                TxMercadoFormComponent, 
                ], 
                entryComponents: [TxMercadoGridComponent,TxMercadoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TxMercadoModule {} 
