import { RouterModule } from '@angular/router'; 
 
import {FaturamentoPadraoGridComponent} from './faturamentopadrao-grid/faturamentopadrao-grid.component'; 
import {FaturamentoPadraoFormComponent} from './faturamentopadrao-form/faturamentopadrao-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {FaturamentoPadraoService} from './faturamentopadrao.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: FaturamentoPadraoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: FaturamentoPadraoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                FaturamentoPadraoGridComponent, 
                FaturamentoPadraoFormComponent, 
                ], 
                entryComponents: [FaturamentoPadraoGridComponent,FaturamentoPadraoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class FaturamentoPadraoModule {} 
