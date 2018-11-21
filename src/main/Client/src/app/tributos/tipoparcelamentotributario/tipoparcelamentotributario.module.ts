import { RouterModule } from '@angular/router'; 
 
import {TipoParcelamentoTributarioGridComponent} from './tipoparcelamentotributario-grid/tipoparcelamentotributario-grid.component'; 
import {TipoParcelamentoTributarioFormComponent} from './tipoparcelamentotributario-form/tipoparcelamentotributario-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {TipoParcelamentoTributarioService} from './tipoparcelamentotributario.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: TipoParcelamentoTributarioGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: TipoParcelamentoTributarioFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                TipoParcelamentoTributarioGridComponent, 
                TipoParcelamentoTributarioFormComponent, 
                ], 
                entryComponents: [TipoParcelamentoTributarioGridComponent,TipoParcelamentoTributarioFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class TipoParcelamentoTributarioModule {} 
