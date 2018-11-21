import { RouterModule } from '@angular/router'; 
 
import {LoteamentoGridComponent} from './loteamento-grid/loteamento-grid.component'; 
import {LoteamentoFormComponent} from './loteamento-form/loteamento-form.component'; 
import {AuthGuard} from '../../security/auth.guard'; 
import {NgModule} from '@angular/core'; 
import {LoteamentoService} from './loteamento.service'; 
import {SharedModule} from '../../shared/shared.module'; 
 
const ROUTES  = [ 
        { 
            path: '', 
                    component: LoteamentoGridComponent, 
                canActivate: [AuthGuard] 
        }, 
        { 
            path: ':id', 
                    component: LoteamentoFormComponent, 
                canActivate: [AuthGuard] 
        }]; 
 
        @NgModule({ 
                imports: [RouterModule.forChild(ROUTES), 
                SharedModule 
                ], 
                declarations: [ 
                LoteamentoGridComponent, 
                LoteamentoFormComponent, 
                ], 
                entryComponents: [LoteamentoGridComponent,LoteamentoFormComponent], 
                schemas: [], 
                providers: [] 
                }) 
        export class LoteamentoModule {} 
