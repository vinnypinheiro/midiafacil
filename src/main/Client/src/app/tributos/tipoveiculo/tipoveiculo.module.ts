import { RouterModule } from '@angular/router'; 
 
import {TipoVeiculoGridComponent} from './tipoveiculo-grid/tipoveiculo-grid.component'; 
import {TipoVeiculoFormComponent} from './tipoveiculo-form/tipoveiculo-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoVeiculoService} from './tipoveiculo.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoVeiculoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoVeiculoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoVeiculoGridComponent, 
                TipoVeiculoFormComponent, 
                ], 
                entryComponents: [TipoVeiculoGridComponent,TipoVeiculoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoVeiculoModule {} 
